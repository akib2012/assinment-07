import { use } from "react";
import Ticket from "./Ticket";


const Tickets = ({ FetchTicketsData, cardClicked, setCardClicked, handleClicked, ResolverClicked, handleresolver }) => {
    const datalists = use(FetchTicketsData);
    // console.log(datalists);

    return (
        <div className=' col-span-8 '>

            <h3>Customer Tickets</h3> <br />
            <div className="grid grid-cols-2 mx-auto gap-5 my-6">
                {
                    datalists.map((list, id) => {
                       return <Ticket handleresolver={handleresolver} ResolverClicked={ResolverClicked} handleClicked={handleClicked}  cardClicked={cardClicked} setCardClicked={setCardClicked}   id={id} list={list}></Ticket>
                        
                        
                    })
                }
            </div>
        </div>
    );
};

export default Tickets;