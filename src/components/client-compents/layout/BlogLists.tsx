"use client";
import BlogCard from "../BlogCard";
import { useEffect, useState } from "react";
import { blogData } from "@/assets/assets";
import BlogsNav from "../BlogsNav";
import SkeletonCard from "../SkeletonCard";

interface BlogCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  name: string;
}

interface BlogListsProps {
  selectedCategory: string;
}

const BlogLists: React.FC = ({ selectedCategory }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [selectedCategory]);

  const filteredBlogs = blogData.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  const SkeletonList = () => {
    return (
      <div className="h-full mx-2">
        <div className="flex flex-wrap justify-around gap-6 gap-y-8 mb-12">
          {filteredBlogs.map((item, index) => {
            return <SkeletonCard key="index" />;
          })}
        </div>
      </div>
    );
  };

  if (filteredBlogs.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-300">
          No blogs found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full mx-2 mt-8">
      {isLoading ? (
        <SkeletonList />
      ) : (
        <div className="flex flex-wrap justify-around gap-4 gap-y-6 mb-12">
          {filteredBlogs.map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              category={item.category}
              name={item.name}
            />
          ))}
        </div>
      )}
      <span className="h-8 w-8 flex justify-center items-center mx-auto border border-gray-200">
        <p>1</p>
      </span>
    </div>
  );
};

export default BlogLists;
