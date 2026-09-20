import usergirl from './user-4.jpg';
import {useState} from 'react';

function App(){

 const[color,setColor]=useState('red');
 let handleSubmit=(e)=>{

e.preventDefault();
 }
return(
  <div style={{backgroundColor:color}} className="flex flex-col items-center justify-center min-h-screen">
  <form onSubmit={handleSubmit}>
    <label className="text-3xl text-white font-bold mb-2" >Select your favorite Color:</label>
  <select value={color} onChange={(e)=>{setColor(e.target.value)}}  className="border border-gray-300 ml-2 rounded px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-black font-medium">
      
    <option value="red">Red </option>
    <option value="blue">Blue </option>
    <option value="green">Green </option>
    <option value="yellow">Yellow </option>
    <option value="purple">Purple </option>
    <option value="orange">orange</option>
    <option value="pink">RosePInk </option>
    <option value="skyblue">skyblue </option>
  </select>
  </form>
    </div>

);
  
  
}
export default App;