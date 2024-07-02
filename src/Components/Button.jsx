import React , {useContext} from 'react'
import { InputContext } from '../Store/Contextprovider'
import axios from 'axios'

const Button = () => {

  const {input , setTemp , setWeatherstate , setFeelsLike , setHumidity , setWindSpeed , seterror } = useContext(InputContext)


  const fetchData = async ()=>{
    const options = {
      method: 'GET',
      url: `https://open-weather13.p.rapidapi.com/city/${input}/EN`,
      headers: {
        'x-rapidapi-key': '73918fb350mshaf79356cbee72b9p11ee84jsn42d2f144a22d',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data)
      setWeatherstate(response.data['weather'][0]['main']);
      setTemp(response.data['main']['temp'])
      setFeelsLike(response.data['main']['feels_like'])
      setHumidity(response.data['main']['humidity'])
      setWindSpeed(response.data['wind']['speed'])
      seterror(false)
    } catch (error) {
      seterror(true)
    }
  }



  return <button className="btn btn-outline-dark m-1 btn-outline-info" style={{padding:"10px"}} onClick={fetchData} >Search </button>
}

export default Button