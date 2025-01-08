// Single result instance
const SingleResult = ({ result }) => {
  return (
    <div className=" w-full text-xs lg:text-sm py-2 border-b border-gray-200 text-gray-700 active:bg-yellow-300 hover:rounded-xl  px-3">
      <p>{result}</p>
    </div>
  );
};

export default SingleResult;
