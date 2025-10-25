import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="p-4 sm:p-6">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
