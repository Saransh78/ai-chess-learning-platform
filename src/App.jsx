import Button from "./component/button";
import Chessboard from "./component/Chessboard";
import Header  from "./component/Header";
export default function App() {
  return (
    
    <div className="max-w-6xl mx-auto p-4 flex flex-col gap-4">
      <Header></Header>
      <Chessboard></Chessboard>
    </div>

  )
}

