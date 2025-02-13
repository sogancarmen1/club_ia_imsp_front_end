"use client";
import React, { useEffect } from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FormLayout from "@/components/form-layout/page";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useDashboard } from "@/app/context/dashboardContext";

const FormElementsPage = () => {
  const { token } = useDashboard();
  useEffect(() => {
    if (!token) redirect("/auth/signin");
  }, [token]);

  return (
    <DefaultLayout>
      <FormLayout />
    </DefaultLayout>
  );
};

export default FormElementsPage;
