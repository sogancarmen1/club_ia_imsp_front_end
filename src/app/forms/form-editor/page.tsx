"use client";
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import FormEditor from "@/components/FormEditor";

// export const metadata: Metadata = {
//   title: "Next.js Form Elements | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Form Elements page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const FormElementsPage = () => {
  return (
    <DefaultLayout>
      <FormEditor />
    </DefaultLayout>
  );
};

export default FormElementsPage;
