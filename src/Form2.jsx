import React from "react"

const Form2 = (props) => {

  return (
    <>
      <div>
        <input type="email" placeholder="email" name="email" onChange={e => props.updateInput(e)}></input>
      </div>
    </>
  )
}
export default Form2;