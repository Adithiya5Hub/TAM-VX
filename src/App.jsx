import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";


function App() {
  

  return (
    <BrowserRouter>
     <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />  {/*Events Timeline*/}
        <Tech />    {/*Principal*/}
        <Works /> {/*Faculty Advisor*/}
        <Feedbacks /> {/*Crew*/}
        <div className='relative z-0'>
          <Contact /> {/*Contact Us*/}
          
        </div>
      </div>
    
    </BrowserRouter>

  )
}

export default App
