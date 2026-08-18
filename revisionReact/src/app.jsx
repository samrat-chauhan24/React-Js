import React, {useState} from 'react';


function App() {
  const [count, setCount] = useState(0);

  function increase(){
    if(count < 20)
    setCount(count + 1);
    else alert("limit reached")
  }  
  function decrease(){
    if(count > 0)
    setCount(count - 1);
    else alert("limit reached")
  } 
  
  function reset(){
    if(count !== 0) setCount(0)
  }

  return (
    <>
    <div className="flex justify-center items-center h-dvh bg-neutral-800">
      <div className='text-white border-2 rounded-2xl w-50 h-50 flex flex-col justify-evenly items-center'>
        <h2>Count  : {count}</h2>
        <button 
          className='w-20 border border-white rounded-2xl  p-0.5'
          onClick={increase}
          >
          counter++
        </button>
        <button 
          className='w-20 border border-white rounded-2xl'
          onClick={decrease}
          >
          counter--
        </button>
        <button 
          className='w-20 border border-white rounded-2xl'
          onClick={reset}
          >
          reset
        </button>
      </div>
    </div>
    </>
  )
}

export default App