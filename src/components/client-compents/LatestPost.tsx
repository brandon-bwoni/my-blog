import Link from "next/link";
import { Button } from "../ui/button";

type LatestBlog = {
  id: number;
  title: string;
  description: string;
  date: Date;
};

const LatestPost = ({ id, title, description, date }: LatestBlog) => {
  return (
    <div className="flex flex-col justify-between w-[85%] lg:max-w-lg sm:h-[70%] xl:h-[50%] bg-gradient-to-r from-gray-900/30 to-gray-600/60 p-4 z-10 my-20  mx-auto lg:mx-32 rounded-2xl shadow-xl">
      <div className="px-4 flex flex-col gap-1 lg:gap-3 ">
        <h1 className="text-lg lg:text-2xl font-semibold text-white text-center">
          Latest Post
        </h1>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-100 text-center leading-6 ">
          This is the blog title with all the estimated words
        </h1>
        <p className="text-white text-md lg:text-xl leading-6 lg:leading-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio error
          totam repellendus impedit a reprehenderit cupiditate sit tempore ab!
          totam repellendus impedit a reprehenderit cupiditate sit tempore ab!
        </p>
      </div>
      <div className="flex justify-between items-center  pb-2">
        <span className="text-white text-sm">
          Posted on: <b>26 July 2025</b>
        </span>
        <Link href={`/blogs/`}>
          <Button className="rounded-full h-8 text-sm font-semibold hover:shadow-lg bg-gray-100 hover:bg-white">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LatestPost;
