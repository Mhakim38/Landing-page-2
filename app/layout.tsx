import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ayam Penyet Best | Authentic Indonesian Cuisine",
  description: "Experience the best authentic Indonesian Ayam Penyet cuisine. Fresh ingredients, traditional recipes, and unforgettable flavors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
