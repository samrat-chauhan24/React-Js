import { useState, useCallback, useEffect, useRef } from "react"

function App() {
const [length, setLength] = useState(4);
const [number, isNumberAllowed] = useState(false);
const [symbols, isSymbolAllowed] = useState(false);
const [password, setPassword] = useState("");
// to link passInput and copy button using refHook
const passwordRef = useRef(null);
const [copied, setCopied] = useState(false);

const passwordGen = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(number) str += "0123456789";
  if(symbols) str += "!@#$%&*_+=~`";
  
  for(let i = 1;  i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);

}, [length, number, symbols, setPassword]);

const copyPassToClipboard = useCallback(() => {
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)
  setCopied(true);
  setTimeout(()=>{
    setCopied(false);
  },2000)
}, [password])

useEffect(() => {passwordGen()}, [length, setPassword, symbols, number, passwordGen])
  return (
    <>
    <div className="bg-black text-white h-screen flex flex-col justify-center items-center">
    <h1 className=" bg-blue-300 w-40 text-center rounded-2xl">Password Generator</h1>
    <div className="w-85 mt-10 h-40 rounded-2xl border flex flex-col items-center justify-center">
      
      <div className="w-70 h-15 flex items-center justify-evenly border border-white rounded-2xl">
        <input ref={passwordRef} value={password} type="text" placeholder="password" className="border ml-2 mr-2 w-50 text-[10px] p-2 rounded-sm"/> 
        <button onClick={copyPassToClipboard} className="w-20 mr-2 bg-blue-300 h-8 text-center rounded-sm hover:bg-blue-400 active:bg-blue-700">{copied?"Copied!":"Copy"}</button>
      </div>
     
      <div className="w-70 h-15 flex items-center justify-evenly border border-white rounded-2xl mt-1">
        
        <div className="text-[10px] w-28"><label ><input type="range" min="4" max="50" value={length} className="w-15 h-2" onChange={(e) => setLength(+e.target.value)}/>length({length})</label></div>
        
        <label className="text-[10px] p-2"><input type="checkbox" name="numbers" id="" className="w-2 h-2" defaultChecked={number} onChange={()=>{isNumberAllowed((before) => !before)}}/> numbers</label>
        
        <label className="text-[10px]"><input type="checkbox" name="chars" id="" className="w-2 h-2" defaultChecked={symbols} onChange={()=>{isSymbolAllowed((before) => !before)}}/> symbols</label>
      </div>
    </div>
    </div>
    </>
      
  )
}

export default App
