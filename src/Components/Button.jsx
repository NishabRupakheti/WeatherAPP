import React from 'react'

const Button = () => {

    const handleClick = ()=>{
        window.alert("the button has been clicked")
    }

  return <button className="btn btn-outline-dark m-1 btn-outline-info" onClick={handleClick} style={{padding:"10px"}}>Search </button>
}

export default Button