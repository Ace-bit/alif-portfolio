import { Metadata, Viewport } from "next";

export const viewport: Viewport = {
    width: '500px',
    height: '176px',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata: Metadata = {
    title: 'DSEG',
    description: "Sample",
};

export default function DSEGLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`antialiased`}>
            { children }
        </body>
        </html>
    );
}