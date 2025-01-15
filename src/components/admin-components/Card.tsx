import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="w-[100%] flex flex-col gap-3 cursor-pointer  bg-zinc-300 p-5 rounded-xl shadow-lg">
      <div className="flex gap-4 justify-center items-center">
        <MdSupervisedUserCircle className="h-8 w-8 text-gray-600" />
        <span className="text-2xl font-semibold text-gray-600">
          Total Users
        </span>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <span className="text-[24px] text-center text-gray-600 font-bold">
          10.273
        </span>
        <span className="text-[14px] font-light">
          <span className="text-green-600 font-semibold">12%</span> more than
          previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
