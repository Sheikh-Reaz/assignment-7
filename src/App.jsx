
import './App.css'
import Navbar1 from './Components/Navbar/Navbar1'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'
import Tickets from './Components/Tickets/Tickets'
import { Suspense } from 'react'
import { useState } from 'react'

const fetchTickets = async() => {
  const res = await fetch("/tickets.json")
  return res.json();

}

function App() {

  const [ticketSelected,setTicketSelected] = useState([])
  const [resolvedTickets, setResolvedTickets] = useState([]);
  // console.log(ticketSelected)
  



  const ticketPromise = fetchTickets()

  return (
    <>
    
      <Navbar1></Navbar1>
      <Banner ticketSelected={ticketSelected} ></Banner>
      <Suspense   >
        <Tickets 
        ticketSelected={ticketSelected} 
        setTicketSelected={setTicketSelected} 
        ticketPromise={ticketPromise}
        resolvedTickets={resolvedTickets}
        setResolvedTickets={setResolvedTickets}
        >

        </Tickets>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
