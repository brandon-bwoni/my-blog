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
      <div className="sm:pl-12 pt-6">
        <Image
          src={image}
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col mr-8 text-center pt-2">
        <h1 className="text-lg font-semibold text-gray-100">Brandon Bwoni</h1>
        <p className="text-xs text-gray-400">Administrator</p>
      </div>
      <div className="wrap pl-3 w-24 sm:w-[200px] h-[100vh] pt-12">
        <div className="w-[90%] ">
          <Link
            href="/admin/dashboard"
            className="w-48 flex items-center gap-3 font medium px-3 py-2 hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <TbPresentation className="w-5 h-5" />
            <p className="text-lg">Dashboard</p>
          </Link>
          <Link
            href="/admin/add-blog"
            className="mt-8 flex w-48 items-center gap-3 font medium px-3 py-2  hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <IoMdAddCircleOutline className="w-6 h-6" />
            <p className="text-lg">Add blogs</p>
          </Link>
          <Link
            href="/admin/blog-list"
            className="mt-8 w-48 flex items-center gap-3 font medium px-3 py-2  hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <IoMdList className="w-6 h-6" />
            <p className="text-lg">Blogs list</p>
          </Link>
          <Link
            href="/admin/subscriptions"
            className="mt-8 w-48 flex items-center gap-3 font medium px-3 py-2 hover:shadow-lg hover:bg-white hover:rounded-xl text-white hover:text-black"
          >
            <MdMarkEmailRead className="w-6 h-6 " />
            <p className="text-lg">Subscriptions</p>
          </Link>
          <Link
            href="/admin/login"
            className="mt-8 w-48 flex items-center gap-3 font medium px-3 py-2 hover:shadow-lg bg-red-400/50 rounded-xl hover:bg-red-600 hover:rounded-xl text-white hover:text-white"
          >
            <MdMarkEmailRead className="w-6 h-6 " />
            <p className="text-lg">Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
