import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MaterialUITheme from "@/config/mui/MaterialUITheme";
import ReduxProvider from "@/config/redux/ReduxProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const metadata: Metadata = {
  title: "Event Management Systen",
  description:
    "This is an Event Management System Dashboard focuses on crud of upcoming & past events along with it's attendees ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-page-background`}
      >
        <MaterialUITheme>
          <ToastContainer />
          <ReduxProvider>{children}</ReduxProvider>
        </MaterialUITheme>
      </body>
    </html>
  );
}
