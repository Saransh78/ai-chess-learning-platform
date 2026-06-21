import Button from "./button"
export default function Header(){
  return <header className="flex items-center justify-between ">
    <div className="flex flex-col gap-1">
<h1 className="text-3xl font-bold text-blue-500">AI Chess Learning Platform</h1>
      <span className="text-zinc-400 text-sm">upload games</span>
    </div>
    <div className="flex flex-col gap-2 items-end">
    <span className=" text-2xl font-bold text-blue-500">Stockfish Analysis</span>
      <div className="flex items-center gap-3">
        <Button text="Start" />
        <Button text="Report" />
      </div>
    </div>
  </header>
}