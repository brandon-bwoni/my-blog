import { MdSupervisedUserCircle } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex justify-center gap-8 mx-3 my-6 bg-gray-100">
      {/* Card-1 */}
      <div className="w-96 h-48 flex flex-col gap-3 cursor-pointer  bg-zinc-300 p-5 rounded-xl shadow-lg">
        <div className="flex gap-2 justify-center items-center">
          <MdSupervisedUserCircle className="h-8 w-8 text-gray-600" />
          <span className="text-2xl font-semibold text-gray-600">
            Total Posts
          </span>
        </div>
        <div className="flex flex-col text-center justify-center gap-5">
          <span className="text-5xl text-center text-gray-600 font-bold">
            0
          </span>
          <span className="text-[14px] font-light">
            <span className="text-green-600 font-semibold">12%</span> more than
            previous week
          </span>
        </div>
      </div>

      {/* Card-2 */}
      <div className="w-96 h-48 flex flex-col gap-3 cursor-pointer  bg-zinc-300 p-5 rounded-xl shadow-lg">
        <div className="flex gap-2 justify-center items-center">
          <MdSupervisedUserCircle className="h-8 w-8 text-gray-600" />
          <span className="text-2xl font-semibold text-gray-600">
            Subscribers
          </span>
        </div>
        <div className="flex flex-col text-center justify-center gap-5">
          <span className="text-5xl text-center text-gray-600 font-bold">
            0
          </span>
          <span className="text-[14px] font-light">
            <span className="text-green-600 font-semibold">12%</span> more than
            previous week
          </span>
        </div>
      </div>

      {/* Graph */}
    </div>
  );
};

export default Dashboard;
