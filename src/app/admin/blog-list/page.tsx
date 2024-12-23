"use client";
import { useEffect, useState } from "react";
/**import axios from axios */
/**import {toast} from "react-toastify" */

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { blogData } from "@/assets/assets";
import BlogTableItem from "@/components/admin-components/BlogTableItem";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  //Fetching blogs
  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
  };

  // deleting a blog
  const deleteBlog = async (blogId) => {
    const response = await axios.delete("/api/blog/", {
      params: {
        id: blogId,
      },
    });
    toast.success(response.data.msg);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-4 px-4 sm:pl-12">
      <h1 className="text-center font-semibold text-xl text-slate-700">
        All Blog Articles
      </h1>
      <div className="h-[85vh] max-w-[920px] overflow-y-auto mt-4 no-scrollbar bg-slate-200 rounded-xl">
        <Table className="text-sm text-slate-700">
          <TableHeader className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <TableRow className="flex gap-32">
              <TableHead className="hidden sm:block px-6 py-2">
                Author Name
              </TableHead>
              <TableHead className="px-6 py-2">Blog Title</TableHead>
              <TableHead className="px-6 py-2">Date</TableHead>
              <TableHead className="px-6 py-2">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-[80%]">
            {blogData.map((item, index) => {
              return (
                <BlogTableItem
                  key={index}
                  blogId={item_id}
                  title={item.title}
                  author={item.name}
                  authorImg={item.authorImg}
                  date={Date.now()}
                  deleteBlog={deleteBlog}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BlogList;
