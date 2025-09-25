import { Suspense, useState } from 'react'
import './App.css'
import Box from './components/Box'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Tickets from './components/Tickets'
import Status from './components/status'
import Resolve from './components/Resolve'





const FetchTicketsData = fetch('/TicketData.json')
  .then(data => data.json())






function App() {
  // const [Handlecard, setHandlecard] = useState();

  const [cardClicked, setCardClicked] = useState([]);
  const [resolvers, setResolvers] = useState([]);

  const handleClicked = (id, list) => {
    const newlist = [...cardClicked, list]

    setCardClicked(newlist);

  }
  const removecard = (issus) => {
    const filtercard = cardClicked.filter(issu => issu.id !== issus.id);
    setCardClicked(filtercard);
  }

  const resolver = (Resolve) => {

    const newresolve = [...resolvers, Resolve]
    setResolvers(newresolve)
  }




  return (
    <>
      <div className='bg-gray-100'>
        {/* nabvar here */}
        <Navbar></Navbar>

        {/* main part here */}

        <main >
          {/* box */}
          <Box cardClicked={cardClicked} resolvers={resolvers}></Box>

          {/* ticket continer sections */}
          <div className='container grid grid-cols-12 gap-5'>
            <Suspense fallback="loading ticktes data .......">
              <Tickets cardClicked={cardClicked} handleClicked={handleClicked} setCardClicked={setCardClicked} FetchTicketsData={FetchTicketsData}></Tickets>
            </Suspense>

            {/* task bar working here */}
            <div className='col-span-4 '>
              <h3 className='text-3xl font-semibold mb-4'>Task Status</h3>
              {
                cardClicked.length !== 0 ? (
                  cardClicked.map(crd => (
                    <Suspense key={crd.id}>
                      <Status
                        crd={crd}
                        resolver={resolver}
                        removecard={removecard}
                      />
                    </Suspense>
                  ))
                ) : (
                  <p className='text-2xl text-gray-400'>Select a ticket to add to Task Status</p>
                )
              }

              <br /><br />

              <div>
                <h3 className='text-3xl font-semibold mb-4'>Resolved Task</h3>

                {
                  resolvers.length !== 0 ? resolvers.map(res => <Resolve res={res}></Resolve>) : <p className='text-2xl text-gray-400'>No resolved tasks yet.</p>
                }
              </div>

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
