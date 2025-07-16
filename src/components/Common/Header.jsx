import useTopicStore from "../../store/useTopicStore";
import { topicStyles } from "../../utils/topicStyles";
const Header = () => {
  const { topic } = useTopicStore();

  const topicStyle = topicStyles[topic] ?? {};
  return (
    <div className="container flex items-center justify-between py-[27px]">
      {topic ? (
        <div className="flex items-center rounded-2xl gap-4">
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
