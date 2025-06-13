import { Link } from "react-router-dom";


const StartContainer = () => {
  const links = [
    {path: "/", img: "/assets/images/icon-html.svg"}
  ]
  return (
    <div className="lg:flex lg:justify-between container">
      <section className="welcome mb-10 pt-8 md:pt-0">
        <h1 className="text-[40px] md:text-[64px] md:mb-0.5 lg:leading-15">
          Welcome to the <br />
          <span className="font-bold">Frontend Quiz!</span>
        </h1>

        <p className="text-blue-300 text-[14px] md:text-[20px] mt-3 italic md:pt-5 ">
          Pick a subject to get started.
        </p>
      </section>
      <section className="themes w-full lg:w-[554px]">
        <Link
          to={"/questions"}
          className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4"
        >
          <img
            src="/assets/images/icon-html.svg"
            alt="html"
            className="size-10 bg-orange-50 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">HTML</p>
        </Link>
        <Link
          to={"/questions"}
          className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4"
        >
          <img
            src="/assets/images/icon-css.svg"
            alt="html"
            className="size-10 bg-green-100 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">CSS</p>
        </Link>
        <Link
          to={"/questions"}
          className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4"
        >
          <img
            src="/assets/images/icon-js.svg"
            alt="html"
            className="size-10 bg-blue-50 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">Javascript</p>
        </Link>
        <Link
          to={"/questions"}
          className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4"
        >
          <img
            src="/assets/images/icon-accessibility.svg"
            alt="html"
            className="size-10 bg-purple-100 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">Accessibility</p>
        </Link>
      </section>
    </div>
  );
};
export default StartContainer;
