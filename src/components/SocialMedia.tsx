import { FaFacebookF, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "./ui/button";

const SocialMedia = () => {
  return (
    <>
      <div className="my-4 flex flex-col items-center justify-center">
        <p className="text-black font font-semibold my-2">
          Share this article on social media
        </p>
        <div className="flex gap-4">
          <Button className="h-8 w-8 px-2 py-2 bg-black rounded-full text-white hover:text-black">
            <FaFacebookF className="w-5 h-5 " />
          </Button>
          <Button className="h-8 w-8 px-2 py-2 bg-black rounded-full text-white hover:text-black">
            <FaXTwitter className="w-5 h-5" />
          </Button>
          <Button className="h-8 w-8 px-2 py-2 bg-black rounded-full text-white hover:text-black">
            <FaGooglePlusG className="w-6 h-6" />
          </Button>
          <Button className="h-8 w-8 px-2 py-2 bg-black rounded-full text-white hover:text-black">
            <FaLinkedinIn className="w-5 h-5" />
          </Button>
        </div>
      </div>{" "}
      */
    </>
  );
};

export default SocialMedia;
