import { useState } from "react";

interface BlogsNavProps {
  onCategoryChange: (category: string) => void;
}

const BlogsNav: React.FC<BlogsNavProps> = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // This function will be called when the user clicks on a category
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange && onCategoryChange(category);
  };

  // Blog Categories
  const categories = [
    { id: "all", label: "All" },
    { id: "development", label: "Development" },
    { id: "security", label: "Security" },
    { id: "ai-ml", label: "AI/ML" },
    { id: "web3", label: "Web 3.0" },
  ];

  return (
    <div className="flex flex-col h-[200px] w-40  justify-center pb-1 gap-1 mx-auto rounded-2xl text-xs lg:text-sm ">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.label)}
          className={
            selectedCategory === category.label
              ? `bg-yellow-300 font-semibold text-black rounded-xl text-nowrap py-2 px-2 text-start`
              : "text-black py-2 px-2 hover:bg-yellow-300/70 text-nowrap hover:rounded-xl text-start"
          }
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default BlogsNav;
