import { useState } from "react";

interface BlogsNavProps {
  onCategoryChange: (category: string) => void;
  closeMenu: () => void;
}

const BlogsNavDropdown: React.FC<BlogsNavProps> = ({
  onCategoryChange,
  closeMenu,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("Blogs");
  const [isOpen, setIsOpen] = useState(false);

  // This function will be called when the user selects a category
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
    closeMenu();
    setIsOpen(false);
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
    <div className="relative w-[91%] mx-auto mb-4 bg-black rounded-lg text-sm lg:text-base">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full text-left  bg-black text-white rounded-lg flex justify-between items-center"
      >
        <span className="text-lg">{selectedCategory}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 bg-white text-black mt-1 rounded-lg shadow-lg z-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.label)}
              className={`block w-full text-left px-4 py-2 hover:bg-yellow-300 hover:text-black ${
                selectedCategory === category.label
                  ? "bg-yellow-300 text-black"
                  : ""
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsNavDropdown;
