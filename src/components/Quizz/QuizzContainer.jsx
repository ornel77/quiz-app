import useTopicStore from "../../store/useTopicStore"


const QuizzContainer = () => {
  const {topic} = useTopicStore()

  return (
    <div>Topic: {topic} </div>
  )
}
export default QuizzContainer