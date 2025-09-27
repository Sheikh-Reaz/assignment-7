import "./App.css";
import Navbar1 from "./Components/Navbar/Navbar1";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Tickets from "./Components/Tickets/Tickets";
import { Suspense } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};


function App() {
  const [ticketSelected, setTicketSelected] = useState([]);
  const [ticketClicked, setTicketClicked] = useState([]);
  const [count, setCount] = useState(0);
  // console.log(ticketClicked)
  const ticketPromise = fetchTickets();

  return (
    <>
      <Navbar1></Navbar1>
      <Banner 
              count={count}
        setCount={setCount}
      ticketSelected={ticketSelected}
      ticketClicked={ticketClicked} 
      ></Banner>
      <Suspense fallback= {<div className="flex justify-center" ><span className="loading loading-dots loading-xl"></span></div>}  >
        <Tickets
        count={count}
        setCount={setCount}
        ticketClicked={ticketClicked}
        setTicketClicked={setTicketClicked}

          ticketSelected={ticketSelected}
          setTicketSelected={setTicketSelected}
          ticketPromise={ticketPromise}
        ></Tickets>
      </Suspense>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
