import React , {createContext , useEffect, useState} from 'react'

export const InputContext = createContext()

const Contextprovider = ({children}) => {

    const [input , setInput] = useState('')

    const handleInput = (e)=>{
        setInput(e.target.value)
    }

    useEffect(()=>{
      if(input == ""){
        seterror(true)
      }
    },[input])


    const [temp, setTemp] = useState();
    const [weatherstate, setWeatherstate] = useState("");
    const [feelsLike, setFeelsLike] = useState();
    const [humidity, setHumidity] = useState();
    const [windspeed, setWindSpeed] = useState();
    const [error , seterror] = useState(false)
    const [name, setName] = useState("")

  return (
    <InputContext.Provider value={{input, name, setName, setInput , handleInput , temp , weatherstate , feelsLike , humidity , windspeed , error , setTemp , setWeatherstate , setFeelsLike , setHumidity , setWindSpeed , seterror }}>
        {children}
    </InputContext.Provider>
  )
}   

export default Contextprovider