import { Input } from "../../ui/input";
import { Button } from "../../ui/button";

const SubscribeForm = () => {
  return (
    <form>
      <div className="flex flex-col items-center lg:items-start gap-2 mt-2 ">
        <div className="flex justify-center items-center lg:items-start border-[1.5px] rounded-full w-48 lg:w-[260px] px-[1.5px] py-[1.5px] border-white">
          <Input
            type="text"
            placeholder="Enter your email"
            className="rounded-full outline-none border-none placeholder:text-sm placeholder:text-gray-200 focus:placeholder:text-gray-400 active:outline-yellow-300 active:border-none caret-white text-white"
          />
        </div>
        <Button
          type="submit"
          className="rounded-full max-w-24 bg-yellow-300 hover:bg-yellow-400 hover:shadow-md  shadow-none hover:bg-opacity-90"
        >
          <p className="text-black">Subscribe</p>
        </Button>
      </div>
    </form>
  );
};

export default SubscribeForm;
