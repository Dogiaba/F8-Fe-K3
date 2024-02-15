import { NextAuthProvider } from "./components/Provider";
// import { NextUIProvider } from "@nextui-org/react";
// import { ThemeProvider } from "next-themes";
import "./globals.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: "Mind Map",
  description: "Mind Map công cụ hỗ trợ học tập",
  openGraph:{
    title:"Mind Map",
    // images:["platform-mac@2x-185d8c3bde.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
      <ToastContainer />
          <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
