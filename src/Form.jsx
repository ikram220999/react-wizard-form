import React, { useState } from "react"


const Form = (props) => {
  return (
    <>
      <div>
        <input type="name" placeholder="name" name="name" value={props.data.name} onChange={e => props.updateInput(e)}></input>
      </div>
    </>
  )
}
export default Form;