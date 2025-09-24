import { Suspense } from 'react'
import './App.css'
import Box from './components/Box'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets'





const FetchTicketsData = fetch('/TicketData.json')
  .then(data => data.json())


function App() {


  return (
    <>
      <div className='bg-gray-100'>
        {/* nabvar here */}
        <Navbar></Navbar>

        {/* main part here */}

        <main >
          {/* box */}
          <Box></Box>

          {/* ticket continer sections */}
          <div className='container grid grid-cols-12 gap-5'>
            <Suspense fallback="loading ticktes data .......">
              <Tickets FetchTicketsData={FetchTicketsData}></Tickets>
            </Suspense>


            <div className='col-span-4 border-4 border-b-amber-900'>
              <h3>Task Status</h3>
            </div>
          </div>


        </main>


        {/* footer here */}
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
