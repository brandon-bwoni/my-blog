import { IoMailOutline } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div>
      <form>
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-b-2 text-gray-700 border-gray-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-10 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-lightText placeholder:text-gray-300  caret-gray-600"
            id="name"
          />
          <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-lightText transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-darkText dark:peer-focus:text-primary caret-orange-500">
            Name
          </label>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <input
            type="email"
            className="peer block min-h-[auto] w-full rounded border-b-2 text-gray-700 border-gray-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-10 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-lightText caret-gray-600"
            id="exampleInput91"
          />
          <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-darkText dark:peer-focus:text-primary text-lightText">
            Email address
          </label>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full rounded border-b-2 text-gray-700 border-gray-400 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-10 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-50 motion-reduce:transition-none text-lightText  caret-gray-600"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] dark:text-darkText text-lightText transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary">
            Message
          </label>
        </div>
        <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex"></div>
        <button
          type="button"
          className="inline-block w-full rounded-3xl text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal bg-black overflow-x-none hover:shadow-xl hover:transition-all hover:bg-gray-700 hover:text-semibold"
        >
          <div className="flex items-center gap-1 justify-center">
            <IoMailOutline className="w-6 h-6" />
            <p>Send</p>
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
