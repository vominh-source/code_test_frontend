import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import SearchScores from "@/components/search-scores/Search-Scores";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Calender | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Calender page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};
export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Search Scores" />
      <SearchScores/>
    </div>
  );
}
