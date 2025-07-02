import Footer from "@/components/site-footer";
import Header from "@/components/site-header";

export default function PageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <main className="flex-1 bg-white max-w-none">
                {children}
            </main>
            <Footer />
        </div>
    );
}