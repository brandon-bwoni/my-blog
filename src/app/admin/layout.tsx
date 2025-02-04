import Image from "next/image";

import Sidebar from "@/components/admin-components/Sidebar";
import image from "@/assets/image.jpg";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-zinc-700 mr-4">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-8 max-h-[72px] px-8">
          <h3 className="font-semibold text-2xl text-white">Admin Panel</h3>
        </div>
        <main className="bg-slate-100 h-full rounded-2xl mx-4 mb-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default layout;
