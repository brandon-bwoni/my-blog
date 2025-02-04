"use client";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";

import { blogData } from "@/assets/assets";
import upload from "@/assets/upload.png";
import { Button } from "@/components/ui/button";

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Cole Bennett",
    authorImg: "/upload.png",
  });

  // Handle the form input events
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("authorImg", data.authorImg);
    formData.append("image", image);

    // Sending data to the server
    /**Replace fetch with axios */
    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success(response.data.msg);
        setImage(false);
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Brandon Bwoni",
          authorImg: "/author.jpeg",
        });
      }
    } catch (error) {
      toast.error("Couldn't send data. Please try again");
    }
  };

  // Sanitizing the HTML content
  const sanitizedHtml = DOMPurify.sanitize(data.description);

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="pt-5 w-[80%] mx-auto px-5 sm:pt-12 sm:pl-6 mb-16"
      >
        <p className="text-xl font-semibold">Upload thumbnail</p>
        <label htmlFor="image">
          <Image
            src={!image ? upload : URL.createObjectURL(image)}
            width={140}
            height={70}
            alt=""
            className="mt-3 border border-slate-700 rounded-xl hover:cursor-pointer"
          />
        </label>
        <input
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          type="file"
          id="image"
          hidden
          required
          className="rounded-xl"
        />
        <p className="text-xl mt-4 font-semibold">Blog title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          type="text"
          placeholder="Type here"
          required
          className="w-full sm:w-full mt-4 px-4 py-3 border rounded-xl"
        />
        <p className="text-xl mt-4 font-semibold">Blog description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          value={data.description}
          placeholder="Write content here using HTML Markup"
          rows={6}
          required
          type="text"
          className="w-full sm:w-full mt-4 px-4 py-3 border rounded-xl"
        />
        <div className="mt-4 border rounded-xl p-4 ">
          <h3>Preview:</h3>
          <div
            className="rendered-html"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
        <p className="text-xl mt-6 font-semibold">Blog category</p>
        <select
          name="category"
          onChange={onChangeHandler}
          value={data.category}
          className="w-64 mt-4 px-4 py-3 border text-slate-700 rounded-xl ring-2 ring-slate-700"
        >
          <option disabled selected>
            --Choose Category--
          </option>
          <option value="Develepment">Develepment</option>
          <option value="Security">Security</option>
          <option value="AI/ML">AI/ML</option>
          <option value="Web 3.0">Web 3.0</option>
        </select>
        <br />
        <Button
          type="submit"
          className="mt-8 w-40 h-12 bg-zinc-700 text-white hover:text-slate-100 rounded-xl text-lg font-medium hover:bg-slate-500"
        >
          Add Blog
        </Button>
      </form>
    </>
  );
};

export default AddBlog;
