import ContactForm from "@/components/ui/ContactForm";
import React from "react";

const page = () => {
  return (
    <div className="h-full ">
      <div className="h-[20vh] lg:h-[30vh] bg-black flex justify-center items-center pt-8">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
      </div>
      <div className="h-[70vh]">
        <div className="w-[80%] mx-auto py-8">
          <div className="w-3/5">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
