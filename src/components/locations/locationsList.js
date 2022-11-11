import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    // const [filteredTickets, setFiltered] = useState([])
    // const [emergency, setEmergency] = useState(false)
    // const [openOnly, updateOpenOnly] = useState(false)
    // const navigate = useNavigate()

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

    // useEffect(
    //     () => {
    //         if (emergency) {
    //            const emergencyTickets = tickets.filter(ticket => ticket.emergency === true)
    //            setFiltered(emergencyTickets)
    //         }
    //         else {
    //             setFiltered(tickets)
    //         }
    //     },
    //     [emergency]
    // )

    useEffect(
        () => {
            fetch(`http://localhost:8088/locations`)
            .then(response => response.json())
            .then((locationsArray) => {
                setLocations(locationsArray)
            })
        },
        [] // When this array is empty, you are observing initial component state
    )

    // useEffect(
    //     () => {
    //         if (honeyUserObject.staff) {
    //             // for employees
    //             setFiltered(tickets)
    //         }
    //         else {
    //             // for customers
    //             const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
    //             setFiltered(myTickets)
    //         }
    //     },
    //     [tickets]
    // )

    // useEffect(
    //     () => {
    //         if (openOnly) {
    //            const openTicketArray = tickets.filter(ticket => {
    //             return ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""
    //            })
    //            setFiltered(openTicketArray)
    //         }
    //         else {
    //             const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
    //             setFiltered(myTickets)
    //         }
    //     },
    //     [openOnly]
    // )

    return <>
    
    <h2>Visit a Kandy Korner Near You</h2>

    <article className="locations">
        {
            locations.map(
                (location) => {
                    return <section className = "location" key={`location--${location.id}`}>
                        <header className = "l--header">{location.nickName}</header>
                        <p>Address: {location.address}</p>
                        <footer>{location.sqFt} square feet of kandy kraziness!</footer>
                    </section>
                }
            )
        }
    </article>
    </>
}

/* {
        honeyUserObject.staff
            ? <>
             <button onClick={ () => { setEmergency(true) } }>Emergency Only</button>
             <button onClick={ () => { setEmergency(false) } }>Show All</button>
             </>
            : <>
            <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
            <button onClick={() => { updateOpenOnly(true) } }>Open Tickets</button>
            <button onClick={() => { updateOpenOnly(false) }}>All My Tickets</button>
            </>
    } */