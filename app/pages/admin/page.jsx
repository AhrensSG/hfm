"use client";
import DashBoardAdmin from "@/app/components/admin/dashboard/DashBoardAdmin";
import NavBar from "@/app/components/nav_bar/NavBar";

export default function AdminProfilePage() {
  return (
    <>
      <headear className="">
        <NavBar />
      </headear>
      <DashBoardAdmin />
    </>
  );
}
