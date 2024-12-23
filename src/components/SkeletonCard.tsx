import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="w-[330px] sm:max-w-[300px] h-[440px] rounded-3xl relative bg-gray-200 shadow-sm transition hover:-translate-y-1 hover:scale-101 duration-300 ease-in-out delay-150 hover:shadow-xl p-0">
      <div className="h-1/2">
        <Skeleton className="h-full w-full rounded-t-xl bg-gray-300" />
      </div>
      <div className="h-[240px] w-full flex flex-col gap-3 justify-center  px-3  hover:bg-white rounded-3xl absolute bottom-[1px] bg-gray-100">
        <Skeleton className="max-w-72  rounded-full font-semibold bg-gray-300 h-3" />
        <Skeleton className="max-w-72  rounded-full font-semibold bg-gray-300 h-3" />
        <Skeleton className="max-w-72  rounded-full font-semibold bg-gray-300 h-3" />
        <Skeleton className="max-w-72  rounded-full font-semibold bg-gray-300 h-3" />
        <Skeleton className="max-w-72  rounded-full font-semibold bg-gray-300 h-3" />
        <Skeleton className="flex flex-col gap-2  items-center" />
        <div className="flex justify-end">
          <Skeleton className="w-16 h-10 pb-2 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
