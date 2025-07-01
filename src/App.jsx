import "./styles.css"
import { useState } from "react"

function App() {
  const [currentOperand, setCurrentOperand] = useState("")
  const [previousOperand, setPreviousOperand] = useState("")
  const [operation, setOperation] = useState(null)

  function priskiriam(sk){
    if(sk === "." && currentOperand.includes (".")) return
    if(sk === "0" && currentOperand === 0) return

    setCurrentOperand(prev => prev + sk)
  }

  function clear(){
    setCurrentOperand("")
    setPreviousOperand("")
    setOperation(null)
  }

  function rinktisOp(op){
    if(currentOperand === "" && operation != ""){
      setOperation(op)
    }
    if(currentOperand === "") return
    if(previousOperand != ""){
      const result = skaiciuot()
      setPreviousOperand(result)
    }
    else{
      setPreviousOperand(currentOperand)
    }
    setCurrentOperand("")
    setOperation(op)
  }

  function skaiciuot(){
    const prev = parseFloat(previousOperand)
    const curr = parseFloat(currentOperand)
    if(isNaN(prev) || isNaN(curr)) return ""

    let result = ""
    switch(operation){
      case "+":
        result = prev + curr
        break
      case "-":
        result = prev - curr
        break
      case "*":
        result = prev * curr
        break
      case "/":
        result = curr === 0 ? "Negalima dalint is 0": prev / curr
        break
      default:
        return ""
    }
    return result.toString()
  }

  function lygus(){
    const result = skaiciuot()
    setCurrentOperand(result)
    setPreviousOperand("")
    setOperation(null)
  }

  function del(){
    setCurrentOperand(prev => prev.slice(0, -1))
  }

return (  
<body>
  <div className="calculator">
    <div className="output">
      <div className="prev"> {previousOperand} {operation} </div>
      <div className="curr">{currentOperand} </div>
    </div>
    <button className="span-du" onClick={clear}>CLEAR</button>
    <button onClick={del}>DEL</button>
    <button onClick={() => rinktisOp("/")}>/</button>
    <button onClick={() => priskiriam("1")}>1</button>
    <button onClick={() => priskiriam("2")}>2</button>
    <button onClick={() => priskiriam("3")}>3</button>
    <button onClick={() => rinktisOp("*")}>*</button>
    <button onClick={() => priskiriam("4")}>4</button>
    <button onClick={() => priskiriam("5")}>5</button>
    <button onClick={() => priskiriam("6")}>6</button>
    <button onClick={() => rinktisOp("+")}>+</button>
    <button onClick={() => priskiriam("7")}>7</button>
    <button onClick={() => priskiriam("8")}>8</button>
    <button onClick={() => priskiriam("9")}>9</button>
    <button onClick={() => rinktisOp("-")}>-</button>
    <button onClick={() => priskiriam(".")}>.</button>
    <button onClick={() => priskiriam("0")}>0</button>
    <button className="span-du" onClick={lygus}>=</button>
  </div>
</body>
)

}

export default App
