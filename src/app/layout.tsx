import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { type Metadata } from "next";
import TopNav from "./_components/TopNav";
import "@uploadthing/react/styles.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
// flex min-h-screen flex-col bg-black text-white
export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`font-sans ${inter.variable} flex flex-col gap-4 bg-black text-white`}
        >
          <TopNav />
          {modal}
          {children}
          <div id="modal-root"></div>
        </body>
      </html>
    </ClerkProvider>
  );
}
