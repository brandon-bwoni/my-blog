import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <div className="sm:h-[500px] lg:h-[270px] py-6 bg-black rounded-t-2xl ">
      <div className="h-full max-w-6xl flex flex-col items-center lg:flex-row justify-between mx-auto pt-2 gap-6 px-8 ">
        {/* Subscribe */}
        <div className="h-full lg:w-1/3 flex flex-col  items-center lg:items-start px-8">
          <div className="flex flex-col items-center lg:items-start gap-1 ">
            <h1 className="text-lg lg:text-2xl font-bold text-white">
              Stay Connected
            </h1>
            <p className="text-gray-200 text-center lg:text-start text-base xl:text-lg">
              Subscribe with your email address to receive the latests posts
            </p>
          </div>
          <SubscribeForm />
        </div>

        {/* Let's connect */}
        <div className=" h-full lg:w-1/3 flex flex-col sm:justify-center lg:justify-start items-start xl:pl-16  gap-2 lg:gap-6 text-center ">
          <h1 className="text-2xl font-bold text-white">Let's Connect</h1>
          <div className="flex flex-row gap-8">
            <Link href="x" passHref={true}>
              <FaXTwitter className="h-6 w-6 text-white hover:text-yellow-300 hover:transition-all" />
            </Link>
            <Link href="github" passHref={true}>
              <FaGithub className="h-6 w-6 text-white hover:text-yellow-300 hover:transition-all" />
            </Link>
            <Link href="linkedin" passHref={true}>
              <FaLinkedin className="h-6 w-6 text-white hover:text-yellow-300 hover:transition-all" />
            </Link>
          </div>
        </div>

        {/* Contacts */}
        <div className="h-full lg:w-1/3 flex gap-2 items-center lg:items-start flex-col ">
          <div className="flex ">
            <Link
              href="/"
              className="flex flex-col gap-1 font-semibold text-white items-center "
            >
              <PaperAirplaneIcon className="h-12 w-12 text-white" />
            </Link>
          </div>
          <div className="flex flex-col text-white items-center lg:items-start">
            <span className="text-2xl font-bold text-white">Contacts</span>
            <Link href="mailto:takura.buzz@gmail.com" passHref={true}>
              takura.buzz@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
