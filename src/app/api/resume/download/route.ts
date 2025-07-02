import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Get the base URL from the request
        const protocol = request.headers.get('x-forwarded-proto') || 'http';
        const host = request.headers.get('host') || 'localhost:3000';

        // For containerized Gotenberg, we need to use host.docker.internal or the actual host IP
        // instead of localhost when constructing the URL that Gotenberg will access
        let resumeUrl: string;

        // Check if there's an explicit URL set for Gotenberg to use
        if (process.env.GOTENBERG_ACCESSIBLE_URL) {
            resumeUrl = `${process.env.GOTENBERG_ACCESSIBLE_URL}/printables/resume`;
        } else if (process.env.NODE_ENV === 'production') {
            // In production, use the actual host
            resumeUrl = `${protocol}://${host}/printables/resume`;
        } else {
            // In development, use host.docker.internal for Docker containers to access host
            const dockerHost = host.replace('localhost', 'host.docker.internal');
            resumeUrl = `${protocol}://${dockerHost}/printables/resume`;
        }

        console.log('Gotenberg will access URL:', resumeUrl);

        // Gotenberg API endpoint
        // If Gotenberg is running on a different port, adjust accordingly
        const gotenbergUrl = process.env.GOTENBERG_URL || 'http://gotenberg-service:3000';

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

        // Call Gotenberg service
        const response = await fetch(`${gotenbergUrl}/forms/chromium/convert/html`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Gotenberg service responded with status: ${response.status}`);
        }

        // Get the PDF buffer
        const pdfBuffer = await response.arrayBuffer();

        // Return the PDF with appropriate headers
        return new NextResponse(pdfBuffer, {
            status: 200,
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="Brandon_Korous_Resume.pdf"',
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
