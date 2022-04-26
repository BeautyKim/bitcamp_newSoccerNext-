import React, {useState} from "react";
import Head from "next/head";
import axios from "axios";

export default function Calc(){
  const[inputs, setInputs] = useState({})
  
  const handleChange=(e)=>{
    e.preventDefault()
    const{value, name} = e.target
    setInputs({
        ...inputs, [name]: value
    })
}
const handleClick = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/basic/calc', inputs)
    .then(res=> {
      const calc = res.data
      document.getElementById('result-span').innerHTML = `
      <h3>num1 : ${calc.num1}</h3>
      <h3>opcode : ${calc.opcode}</h3>
      <h3>num2 : ${calc.num2}</h3>
      <h3>계산결과 : ${calc.calc}</h3>`

    })
    .catch(err=>alert(err))
}
  return <>
  <Head>
  <title>비트캠프 Calc</title>
  </Head>
  <div>
    <form action="" onSubmit={handleClick}>
    <h1>계산기 폼</h1>
        <label htmlFor=""><b>num1</b></label>
        <input name="num1" type="" onChange={handleChange}/><br/>

        <label htmlFor=""><b>opcode</b></label>
        <select type="" name="opcode" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select><br/>
        
        <label htmlFor=""><b>num2</b></label>
        <input name="num2" type="" onChange={handleChange}/><br/>

        <input type="submit" value="계산" /><br/>
        </form>
        <div>계산결과: <span id="result-span"></span></div>

        </div>

  </>
}