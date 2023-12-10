import { client } from "../utils/sanity/client";
import {PortableText} from '@portabletext/react'
const EventsComponent = async ()=>{
    const events = await client.fetch(`*[_type == "event"]`);
    console.log(events)

    return (
        <main>

            <header>
                <h1> EVENTS</h1>
            </header>
            <div>

                {events.map((event,index)=>(

               <Event event={event} key={index} / > ))}
            </div>
        </main>
    )
}
export default EventsComponent;


const Event = (props)=>{
    const {event} = props;
    return (
        <div>
            {event.name}

{/* <PortableText value={[]}/> */}

        </div>
    )
}