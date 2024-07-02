import React , {createContext , useState} from 'react'

export const InputContext = createContext()

const Contextprovider = ({children}) => {

    const [input , setInput] = useState('')

    const handleInput = (e)=>{
        setInput(e.target.value)
    }

    const [temp, setTemp] = useState();
    const [weatherstate, setWeatherstate] = useState("");
    const [feelsLike, setFeelsLike] = useState();
    const [humidity, setHumidity] = useState();
    const [windspeed, setWindSpeed] = useState();

    const [error , seterror] = useState(false)
  

  return (
    <InputContext.Provider value={{input, setInput , handleInput , temp , weatherstate , feelsLike , humidity , windspeed , error , setTemp , setWeatherstate , setFeelsLike , setHumidity , setWindSpeed , seterror }}>
        {children}
    </InputContext.Provider>
  )
}   

export default Contextprovider