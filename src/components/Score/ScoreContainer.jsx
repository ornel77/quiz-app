import useScoreStore from "../../store/useScoreStore"

const ScoreContainer = () => {
  const {score} = useScoreStore()
  return (
    <div className="container">ScoreContainer {score} </div>
  )
}
export default ScoreContainer