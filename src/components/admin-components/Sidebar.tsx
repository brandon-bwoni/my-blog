import Image from "next/image";
import { assets } from "@/assets/assets";

import image from "@/assets/image.jpg";
import Link from "next/link";

import { IoMdAddCircleOutline, IoMdList } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { TbPresentation } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="flex flex-col rounded-2xl">
      <div className="px-2 sm:pl-14 py-6">
        <Image
          src={image}
          alt="logo"
          width={60}
          height={50}
          className="rounded-full"
        />
      </div>
      <div className="wrap pl-3 w-24 sm:w-[200px] h-[100vh] pt-[72px]">
        <div className="w-[90%] ">
          <Link
            href="/admin/dashboard"
            className="w-48 flex items-center gap-3 font medium px-3 py-2  shadow-sm hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <TbPresentation className="w-5 h-5" />
            <p className="text-lg">Dashboard</p>
          </Link>
          <Link
            href="/admin/add-blog"
            className="mt-8 flex w-48 items-center gap-3 font medium px-3 py-2 shadow-sm hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <IoMdAddCircleOutline className="w-6 h-6" />
            <p className="text-lg">Add blogs</p>
          </Link>
          <Link
            href="/admin/blog-list"
            className="mt-8 w-48 flex items-center gap-3 font medium px-3 py-2  shadow-sm hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <IoMdList className="w-6 h-6" />
            <p className="text-lg">Blogs list</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-8 w-48 flex items-center gap-3 font medium px-3 py-2  shadow-sm hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <MdMarkEmailRead className="w-6 h-6 " />
            <p className="text-lg">Subscriptions</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
