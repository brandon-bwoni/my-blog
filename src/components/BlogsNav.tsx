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
    <div className="flex h-12 lg:h-14 justify-center sm:gap-4 md:gap-6 lg:gap-12 mb-4 bg-black min-w-2xl w-[91%] mx-auto rounded-full text-xs lg:text-sm py-[6px] lg:py-2 ">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.label)}
          className={
            selectedCategory === category.label
              ? `bg-yellow-300 font-semibold text-black px-4 rounded-full text-nowrap`
              : "text-white hover:text-yellow-300 text-nowrap"
          }
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default BlogsNav;
