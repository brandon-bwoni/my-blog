import Image, { StaticImageData } from "next/image";
import { MdSupervisedUserCircle } from "react-icons/md";

interface CardProps {
  title: string;
  value: number;
  percentage: number;
  description: string;
  icon: StaticImageData;
}

const StatsCard = ({
  title,
  value,
  description,
  icon,
  percentage,
}: CardProps) => {
  return (
    <div className="w-56 flex flex-col gap-3 cursor-pointer  bg-zinc-300 p-5 rounded-xl shadow-lg">
      <div className="flex gap-4 justify-center items-center">
        <Image src={icon} alt="User Image" className="h-8 w-8" />
        <span className="text-2xl font-semibold text-gray-600">{title}</span>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <span className="text-[24px] text-center text-gray-600 font-bold">
          {value}
        </span>
        <span className="text-[14px] font-light">
          <span className="text-green-600 font-semibold">{percentage}%</span>{" "}
          {description}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
