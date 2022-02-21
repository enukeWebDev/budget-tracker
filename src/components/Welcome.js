import {React ,useState, useEffect}from 'react'
import './Welcome.css'
import Navbar from './navbar/Navbar'
import MicIcon from '@mui/icons-material/Mic';

export default function Header () {

  const [topbar, setTopbar] = useState(true);
  


  useEffect(() => {
    const location = window.location.pathname
    if (location === '/') {
      setTopbar(!topbar)
    }else {
      setTopbar(true)
    }
  }, [window.location.pathname])

  return (
    <>
   {topbar && <h2 className="welcome">
      <Navbar />
     {/* <MicIcon className="mic" /> */}
    </h2>}
    </>
  )
}