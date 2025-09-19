import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Parse request body for options (e.g., variant type)
        let bodyType: 'manager' | 'engineer' | null = null;
        try {
            const body = await request.json();
            if (body && (body.type === 'manager' || body.type === 'engineer')) {
                bodyType = body.type;
            }
        } catch {
            // ignore JSON parse errors; fall back to defaults
        }

        // Get the base URL from the request
        const protocol = request.headers.get('x-forwarded-proto') || 'http';
        const host = request.headers.get('host') || 'localhost:3002';

        // For containerized Gotenberg, we need to use host.docker.internal or the actual host IP
        // instead of localhost when constructing the URL that Gotenberg will access
        let resumeUrl: string;
        console.log('Request host:', host);
        // Check if there's an explicit URL set for Gotenberg to use
        if (process.env.GOTENBERG_ACCESSIBLE_URL) {
            resumeUrl = `${process.env.GOTENBERG_ACCESSIBLE_URL}/printables/resume`;
        } else if (process.env.NODE_ENV === 'production') {
            // In production, use the actual host
            resumeUrl = `${protocol}://${host}/printables/resume`;
        } else {
            // In development, use host.docker.internal for Docker containers to access host
            const dockerHost = host;//host.replace('localhost', 'host.docker.internal');
            resumeUrl = `${protocol}://${dockerHost}/printables/resume`;
        }
        console.log('Base resume URL:', resumeUrl);
        // Append variant type if provided
        if (bodyType) {
            const url = new URL(resumeUrl);
            url.searchParams.set('type', bodyType);
            resumeUrl = url.toString();
        }

        console.log('Gotenberg will access URL:', resumeUrl);

        // Gotenberg API endpoint
        // Prefer explicit env var; default to localhost:3000 for local development
        const gotenbergUrl = process.env.GOTENBERG_URL || 'http://host.docker.internal:3005';
        console.log('Using Gotenberg URL:', gotenbergUrl);

        // Create form data for Gotenberg
        const formData = new FormData();
        formData.append('url', resumeUrl);

        // Optional: Add PDF formatting options
        formData.append('marginTop', '0.5');
        formData.append('marginBottom', '0.5');
        formData.append('marginLeft', '0.5');
        formData.append('marginRight', '0.5');
        formData.append('preferCSSPageSize', 'true');
        formData.append('printBackground', 'true');
        formData.append('scale', '1.0');
        formData.append('waitDelay', '2s'); // Wait for page to fully load
        formData.append('emulatedMediaType', 'print');
        // Relax error handling so missing assets (e.g., favicon) don't fail the job
        formData.append('failOnConsoleExceptions', 'false');
        formData.append('failOnHttpStatusCode', 'false');
        formData.append('failOnNetworkError', 'false');

        // Call Gotenberg service
        // Use the URL conversion endpoint (expects 'url' field), not HTML upload
        const response = await fetch(`${gotenbergUrl}/forms/chromium/convert/url`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Gotenberg service responded with status: ${response.status}`);
        }

        // Get the PDF buffer
        const pdfBuffer = await response.arrayBuffer();

        // Return the PDF with appropriate headers
        const filename = bodyType === 'engineer'
            ? 'Brandon_Korous_Resume_Engineer.pdf'
            : 'Brandon_Korous_Resume.pdf';
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename="${filename}"`,
                'Content-Length': pdfBuffer.byteLength.toString(),
            },
        });

    } catch (error) {
        console.error('Error generating PDF:', error);
        return NextResponse.json(
            { error: 'Failed to generate PDF' },
            { status: 500 }
        );
    }
}
