"use client";
import dynamic from "next/dynamic";
import React from "react";
import Firstpage from "../../components/Firstpage";

const FirstPageComponent = dynamic(() => import("../../components/Firstpage"), {
    ssr: false,
  });

export default function FirstPage() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Render the p5.js sketch */}
      <Firstpage />

      {/* You can overlay additional content if needed */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
          zIndex: 10,
        }}
      >
        <h1>Organic Globby Art</h1>
      </div>
    </div>
  );
}