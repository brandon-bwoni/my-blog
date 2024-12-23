const {NextResponse} = require('next/server');
import { writeFile } from "fs/promises";

import {connectDB} from "@/lib/config/db";
import BlogModel from '@/lib/models/blogModel'
import { NextRequest } from "next/server";
import fs from "fs";

// Loading the database connection
const loadDB = async () => {
  await connectDB();
}

loadDB();

// Fetching all blogs
export async function GET(request: NextRequest) {
  const blogId = request.nextUrl.searchParams.get('id');

  try{
    if(blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({blogs});
    }
  }catch(error){
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching blogs" },
      { status: 500 }
    );
  }
  
}

// Uploading a blog
export async function POST(request: NextRequest) {
  try{
  const formData = await request.formData()
  const timeStamp = Date.now()

  const image = formData.get('image') as File;
  // Check to see if ther is an image
  if (!image) {
    return NextResponse.json(
      { error: "Image is required" },
      { status: 400 }
    );
  }

  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `public/${timeStamp}-${image.name}`;
  await writeFile(path, buffer);
  const imgUrl = `./public/${timeStamp}-${image.name}`;

  const blogData = {
    title: `${formData.get('title')}`,
    description: `${formData.get('description')}`,
    category: `${formData.get('category')}`,
    author: `${formData.get('author')}`,
    image: `${imgUrl}`,
    authorImg: `${formData.get('authorImg')}`,
  };

  // Saving the blog feedback
  await BlogModel.create(blogData);
  console.log("Blog Saved");

  return NextResponse.json({ success: true, msg: "Blog added" });

}catch(error){
  console.error("Error uploading blog:", error);
  return NextResponse.json(
    { error: "An error occurred while uploading the blog" },
    { status: 500 }
  );
}
}

// Deleting a blog
export async function DELETE(request: NextRequest) {
  try{
  const blogId = request.nextUrl.searchParams.get('id');
    // Check to see if the blog exists
    if (!blogId) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }


  const blog = await BlogModel.findById(blogId);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  const imagePath = `public/${blog.image}`;
  if (fs.existsSync(imagePath)) {
    fs.unlink(imagePath, (err: Error) => {
      if (err) console.error("Error deleting image file:", err);
    });
  }


  await BlogModel.findByIdAndDelete(blogId);
  return NextResponse.json({ success: true, msg: "Blog deleted" });

  }catch(error){
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "An error occurred while deleting the blog" },
      { status: 500 }
    );
  }
}