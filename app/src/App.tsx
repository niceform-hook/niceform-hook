import { useEffect } from 'react'
import './App.css'
import { Examples } from './example'
import  {useForm} from 'niceform-hook/dist/customRHF'

function App() {
  console.log(useForm)
  return (
    <>
      <Examples/>
    </>
  )
}

export default App
