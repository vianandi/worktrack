import localFont from "next/font/local";
import "./globals.css";
import ClientLayout from './ClientLayout';

// Mengelola font di sini (bisa di server-side)
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Ekspor metadata dari server-side layout
export const metadata = {
  title: "WorkTrack",
  description: "Track your worklogs and manage projects efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
