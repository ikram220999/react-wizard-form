import React from "react"

const Form2 = (props) => {

  return (
    <>
      <div>
        <input type="password" placeholder="password" value={props.data.password} name="password" onChange={e => props.updateInput(e)}></input>
      </div>
    </>
  )
}
export default Form2;