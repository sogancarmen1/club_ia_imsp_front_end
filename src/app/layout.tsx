"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { DashboardProvider } from "../app/context/dashboardContext";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
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
