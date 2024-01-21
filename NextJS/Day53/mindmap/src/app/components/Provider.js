"use client";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";
export const NextAuthProvider = ({ children }) => {
  const[mounted, setMounted] = useState(false);
  useEffect(()=>{
    setMounted(true);
  },[]);
  
  if(!mounted){
    return <>{children}</>
  }
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark"  themes={["dark", "light", "system"]}>
        <main>
          <SessionProvider>{children}</SessionProvider>
        </main>
      </NextThemesProvider>
    </NextUIProvider>
  );
};
