
import Navbar from "../../components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
