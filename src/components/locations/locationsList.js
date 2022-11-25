import { useEffect, useState } from "react"
import "./locations.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    const localKandyUser = localStorage.getItem("kandy_user")
    const kandyUserObject = JSON.parse(localKandyUser)

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

    return <>
    
    <h2 className="location-title">Visit a Kandy Korner Near You</h2>

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