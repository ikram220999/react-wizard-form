import React, { useState } from "react"
import Form from "./Form"
import Form2 from "./Form2"
import Form3 from "./Form3"

const FormHandler = () => {
  const [turn, setTurn] = useState(0)
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const updateInput = (e) => {

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const next = () => {
    let isValid = true;
    console.log("next 1")

    if (isValid) {
      if (turn != 3) {
        setTurn(prev => prev + 1)
      }
    }
  }

  const prev = () => {
    if (turn != 0) {
      setTurn(prev => prev - 1)
    }
  }

  return (
    <>{

      (turn == 0) ? (<><Form input={input} /></>)
        : (turn == 1) ? (<><Form2 input={input} /></>)
          : (turn == 2) ? (<><Form3 input={input} /></>)
            : (<>done</>)

    }
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
      // asdasd
    </>
  )
}

export default FormHandler;