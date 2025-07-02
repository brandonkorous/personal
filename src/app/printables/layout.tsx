
export default function PrintablesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <main className="flex-1 bg-white max-w-none">
                {children}
            </main>
        </div>
    );
}