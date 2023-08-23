import { useState } from "react";

/* eslint-disable prefer-const */
function App() {
  const [modifiedInput, setModifiedInput] = useState("")


  let entry: string = "fr";
const ls = [

]

const handleChange = (e) => {
const input = e.target.value;
setModifiedInput(input);
if (input.length >0) {
const filtered = ls.filter
}
}
const enterPress = (e) => {
  if (e.key === "Enter" ) {

  }
}
  return (
    <><div className="bg-black h-screen ">
    <p className="text-white">banner list of commands etc</p>
  
      <div className="bg-black p-2 flex flex-row">
        <p className="">
          <span className="text-green-700">loïczeiss@DESKTOP-OGP545SZD</span>
          <span className="text-purple-900	"> MINGW64</span>
          <span className="text-yellow-400"> ~</span>
          <span className="text-blue-800"> (main) </span>
          
        </p>
        <p className="text-white px-2"> $</p>
        <input onKeyUp={} onChange={handleChange} value={modifiedInput} className="h-6 text-white bg-black outline-none " type="text" name="" id="" />
        <p>`value :${entry}`</p>
      </div></div>
    </>
  );
}

export default App;
