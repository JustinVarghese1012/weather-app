import React from "react";

export default function NavBar() {
  return (
    <div className="max-w-full flex items-center justify-between px-6 md:px-16 py-10">
      {/* logo */}
      <h2 className="font-bold text-3xl bg-linear-to-r from-white/90 to-slate-300/60 bg-clip-text text-transparent">
        Klimate
      </h2>
    </div>
  );
}
