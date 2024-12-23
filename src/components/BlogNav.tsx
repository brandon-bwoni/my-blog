import { useState, useEffect } from "react"
import { Button } from "./ui/Button";

const BlogList = () => {
  const [menu, setMenu] = useState("All")

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <Button onClick={() => setMenu("All")} className={menu === "All" ? `bg-black text-white py-1 px-4 rounded-sm` : ""}>All</Button>
        <Button onClick={() => setMenu("Technology")} className={menu === "Technology" ? `bg-black text-white py-1 px-4 rounded-sm` : ""}>Technology</Button>
        <Button onClick={() => setMenu("Startup")} className={menu === "Startup" ? `bg-black text-white py-1 px-4 rounded-sm` : ""}>Startup</Button>
        <Button onClick={() => setMenu("Lifestyle")} className={menu === "Lifestyle" ? `bg-black text-white py-1 px-4 rounded-sm` : ""}>Lifestyle</Button>
      </div>
    </div>
  )
}

export default BlogList