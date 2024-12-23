import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function Search() {
  return (
    <form className="">
      <div className="flex justify-center items-center border-[1.5px] rounded-full w-40 lg:w-56 px-[1.5px] py-[1.5px] border-white">
        <Input
          type="text"
          placeholder="Type your search"
          className="rounded-full outline-none border-none placeholder:text-sm placeholder:text-gray-200 focus:placeholder:text-gray-400 active:outline-none active:border-none caret-white text-white"
        />
        <Button
          type="submit"
          className="rounded-full bg-yellow-300 shadow-none hover:shadow-none hover:bg-yellow-200 px-2 "
        >
          <MagnifyingGlassIcon className="sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
        </Button>
      </div>
    </form>
  );
}
