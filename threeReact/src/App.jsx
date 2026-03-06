import { useState } from "react"
// function setColor() {

// };
function App() {
  const [color, setColor] = useState("white")
  return (
    <div className="min-h-screen" style={{backgroundColor:color}}>
      <h1 className="m-auto w-[50vw] text-center">Color changer project</h1>
      <div className="divOfButtons flex w-[90vw] bg-gray-500 justify-evenly rounded-sm m-auto relative top-60">
        <button
          onClick={()=>setColor("red")} 
          className="text-xs button-col bg-red-500  text-amber-50 rounded-sm m-1 w-[8vw]">Red</button>
        <button
          onClick={()=>setColor("blue")}  
          className="text-xs button-col bg-blue-500  text-amber-50 rounded-sm m-1 w-[8vw]">Blue</button>
        <button 
          onClick={()=>setColor("green")} 
          className="text-xs button-col bg-green-500  text-amber-50 rounded-sm m-1 w-[8vw]">Green</button>
        <button 
          onClick={()=>setColor("yellow")} 
          className="text-xs button-col bg-yellow-500  text-amber-50 rounded-sm m-1 w-[8vw]">Yellow</button>
        <button 
          onClick={()=>setColor("black")} 
          className="text-xs button-col bg-black text-amber-50 rounded-sm m-1 w-[8vw]">Black</button>
        <button 
          onClick={()=>setColor("pink")} 
          className="text-xs button-col bg-pink-500 text-amber-50 rounded-sm m-1 w-[8vw]">Pink</button>
        <button
          onClick={()=>setColor("cyan")}  
          className="text-xs button-col bg-cyan-500 text-amber-50 rounded-sm m-1 w-[8vw]">Cyan</button>
      </div>
    </div>// we can use on click also to change the color
  ) 
}

export default App 
