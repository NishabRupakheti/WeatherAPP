import React from 'react'
import NothingToshow from './NothingToshow'
import Result from './Result'
import { useContext } from 'react'
import { InputContext } from '../Store/Contextprovider'

const Errorlogic = () => {

    const {error , input} = useContext(InputContext)


  return (
    <>
        {
            error ? <NothingToshow /> : <Result/>
        }
    </>
  )
}

export default Errorlogic