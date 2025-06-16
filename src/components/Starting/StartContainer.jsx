import { useNavigate } from "react-router-dom";
import useTopicStore from "../../store/useTopicStore";

const StartContainer = () => {
  const navigate = useNavigate();
  const { setTopic } = useTopicStore();
  const links = [
    {
      title: "HTML",
      path: "/questions",
      img: "/assets/images/icon-html.svg",
      color: "bg-orange-50",
    },
    {
      title: "CSS",
      path: "/questions",
      img: "/assets/images/icon-css.svg",
      color: "bg-green-100 ",
    },
    {
      title: "Javascript",
      path: "/questions",
      img: "/assets/images/icon-js.svg",
      color: "bg-blue-50",
    },
    {
      title: "Accessibility",
      path: "/questions",
      img: "/assets/images/icon-accessibility.svg",
      color: "bg-purple-100",
    },
  ];

  const handleTopic = (topic) => {
    setTopic(topic);
    navigate(`/quizz/${topic}`);
  };

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
        {links.map((link) => (
          <button
            className="flex items-center p-4 bg-blue-850 rounded-2xl gap-4 mb-4 w-full cursor-pointer"
            onClick={() => handleTopic(link.title)}
            key={link.title}
          >
            <img
              src={link.img}
              alt="html"
              className={`size-10 p-1.5 ${link.color} rounded-[8px]`}
            />
            <p className="text-[18px]">{link.title}</p>
          </button>
        ))}
      </section>
    </div>
  );
};
export default StartContainer;
