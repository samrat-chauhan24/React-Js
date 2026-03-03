import Card from './comps/Card.jsx'

let myNewObj = {
  name: "samrat",
  surname:"chauhan",
  age: 21
}
let myNewObj2 = {
  name: "Ronak",
  surname:"malik",
  age: 21
}
let newArr = [1,2,24]
function App() {
  return (
    <>
    <h1 class="text-3xl font-bold underline bg-green-300 rounded-2xl  w-100 text-center">Samrat Chauhan</h1>
      <Card anotherObj = {newArr} anotherArr = {myNewObj} platform="LeetCode"/> 
      <Card anotherObj = {newArr} anotherArr = {myNewObj2} platform="github"/> 

    </>
  )
}

export default App
