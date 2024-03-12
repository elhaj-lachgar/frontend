import React from "react";
import SideBar from "../components/SideBar";

function ProtectLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex  min-h-screen">
      <SideBar />
      {children}
    </main>
  );
}

export default ProtectLayout;
