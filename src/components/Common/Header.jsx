import useTopicStore from "../../store/useTopicStore";

const Header = () => {
  const { topic } = useTopicStore();
  const styles = {
    HTML: {
      img: "/assets/images/icon-html.svg",
      color: "bg-orange-50",
    },
    CSS: {
      img: "/assets/images/icon-css.svg",
      color: "bg-green-100",
    },
    Javascript: {
      img: "/assets/images/icon-js.svg",
      color: "bg-blue-50",
    },
    Accessibility: {
      img: "/assets/images/icon-accessibility.svg",
      color: "bg-purple-100",
    },
  };


  const topicStyle = styles[topic] ?? {}
  return (
    <div className="container flex items-center justify-between py-10">
      {topic ? (
        <div className="flex items-center  rounded-2xl gap-4">
          <img
            src={topicStyle.img}
            alt=""
            className={`size-10 p-1.5 ${topicStyle.color} rounded-[8px]`}
          />
          <p className="text-[18px]">{topic}</p>
        </div>
      ) : (
        <div></div>
      )}

      <p>THEME</p>
    </div>
  );
};
export default Header;
