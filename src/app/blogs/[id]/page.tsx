"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { blogData } from "@/assets/assets";
import { FaHome } from "react-icons/fa";
import image from "@/assets/image.jpg";

const Blog = ({ params }) => {
  const [data, setData] = useState(null);

  // Fetching blog data
  const fetchBlogData = async () => {
    const response = await axios.get("/api/blog", {
      id: params.id,
    });
    setData(response.data);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  // data ?

  return (
    <>
      <div className="flex flex-col pt-10 lg:pt-16 justify-center  text-center h-[350px] mb-24 bg-black">
        <div className="flex flex-col lg:flex-row lg:px-20 xl:px-32 items-center">
          <Link href="/">
            <FaHome className="h-7 w-7 text-yellow-300 hover:text-white" />
          </Link>
          <h1 className="lg:text-2xl sm:text-3xl font-semibold max-w-[700px] mx-auto text-white">
            {/* {data.title} */}
            This is the blog titlel
          </h1>
        </div>
        <Image
          // src={data?.author_image}
          src={image}
          width={60}
          height={60}
          alt="author image"
          className="mx-auto mt-6 border border-white rounded-full"
        />
        <p className=" mt-1 pb-2 text-lg mx-auto max-w-[740px]  text-white">
          {/* {data?.name} */}
          Brandon Bwoni
        </p>
        <span className="text-white text-sm">
          Posted on: <b className="text-yellow-200">26 July 2025</b>
        </span>
      </div>
      <div className="mx-5 max-w-[960px] md:mx-auto mt-[-100px] mb-4">
        <Image
          // src={data?.image}
          src={image}
          width={1280}
          height={720}
          alt="blog_image"
          className="border-4 border-white"
        />
        <div
          className="blog-content"
          // dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
      </div>{" "}
    </>
    // ) : (
    //   <div>Loading...</div>
  );
};

export default Blog;
