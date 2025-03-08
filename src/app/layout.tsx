"use client";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { DashboardProvider } from "../app/context/dashboardContext";
import { ToastContainer } from "react-toastify";
import { useLanguage } from "./context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const { lang } = useLanguage();

  return (
    <html lang={lang}>
      <body suppressHydrationWarning={true}>
        <div>
          <ToastContainer position="top-right" />
        </div>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          <DashboardProvider>
            {loading ? <Loader /> : children}
          </DashboardProvider>
        </div>
      </body>
    </html>
  );
}
