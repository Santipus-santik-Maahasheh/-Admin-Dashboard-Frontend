import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      <div style={{ height: '80vh' }}>
        <Outlet />
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
