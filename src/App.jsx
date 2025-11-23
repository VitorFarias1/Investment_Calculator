import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result"
import User from "./components/User"

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, 
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const isInputValid = userInput.duration > 0;

  function handleUserInput(event) {
        const { name, value } = event.target

        setUserInput((prev) => {
            return { ...prev, [name]: +value }
        })

    }

  return (
    <div>
      <Header />
      <User onChangeInput={handleUserInput} userInput={userInput}/>
      {isInputValid && <Result input={userInput}/>}
      {!isInputValid && <p className="center">Please, enter a duration greater than zero</p>}
    </div>
  )
}

export default App
