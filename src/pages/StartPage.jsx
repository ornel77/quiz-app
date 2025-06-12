import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <>
      <div className="theme flex justify-end py-6">
        <h2>THEME</h2>
      </div>
      <section className="welcome mb-10 pt-8">
        <h1 className="text-[40px] leading-12">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="text-blue-300 text-[14px] mt-3 italic ">
          Pick a subject to get started.
        </p>
      </section>
      <section className="themes">
        <Link to={"/questions"} className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4">
          <img
            src="/public/assets/images/icon-html.svg"
            alt="html"
            className="size-10 bg-orange-50 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">HTML</p>
        </Link>
        <Link to={"/questions"} className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4">
          <img
            src="/public/assets/images/icon-css.svg"
            alt="html"
            className="size-10 bg-green-100 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">CSS</p>
        </Link>
        <Link to={"/questions"} className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4">
          <img
            src="/public/assets/images/icon-js.svg"
            alt="html"
            className="size-10 bg-blue-50 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">Javascript</p>
        </Link>
        <Link to={"/questions"} className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4">
          <img
            src="/public/assets/images/icon-accessibility.svg"
            alt="html"
            className="size-10 bg-purple-100 p-1.5 rounded-[8px]"
          />
          <p className="text-[18px]">Accessibility</p>
        </Link>
      </section>
    </>
  );
};
export default StartPage;
