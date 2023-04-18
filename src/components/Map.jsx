//  google map box
import React, { useState,useRef } from "react";
// import Registration from "../Registration";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsService ,DirectionsRenderer} from "@react-google-maps/api";

import { IconButton ,Button,Text} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from 'react-icons/fa'
import BookRide from "./BookRide";

const center = { lat: 26.84, lng: 75.56 }
const Map = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        // once it will we loaded then we want places to load again
        libraries: ['places']
    })

    const [map, setMap] = useState(null)
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
  
    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()

        // direction api google map bhi deta hai but vo complex hai toh js se krege hm
     async function calculateRoute() {
            if (originRef.current.value === '' || destiantionRef.current.value === '') {
              return
            }
            const google =window.google;
            const directionService = new google.maps.DirectionsService();
            const results =await directionService.route({
                origin:originRef.current.value,
                destination:destiantionRef.current.value,
                travelMode: google.maps.TravelMode.DRIVING

            });
            setDirectionsResponse(results)
            // bhaut sare direction honge but hum sirf first vale target kr rhe
            setDistance(results.routes[0].legs[0].distance.text);
            setDuration(results.routes[0].legs[0].distance.text);

        }

             function clearRoute()
             {
                setDirectionsResponse(null)
                setDistance('')
                setDuration('')
                originRef.current.value = ''
                destiantionRef.current.value = ''
             }

    


    return (
        <>
            <GoogleMap center={center}
                zoom={15}
                mapContainerStyle={{
                    width: '100%', height: '100%'

                }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: true,
                    fullscreenControl: false,

                }}
                onLoad={map => setMap(map)}
            >



                <Marker position={center} />
                {directionsResponse && <DirectionsRenderer directions={directionsResponse}/>}
            </GoogleMap>
            
            <Autocomplete>
                <input type="text" placeholder="origin" ref={originRef}/>
            </Autocomplete>
            <Autocomplete>
                <input type="text" placeholder="to" ref={destiantionRef}/>
            </Autocomplete>
            <Button onClick={calculateRoute}>calculateRoute</Button>
            <Text>distance:{distance}</Text>
            <Text>duration:{duration}</Text>
            <IconButton icon ={<FaLocationArrow/>}onClick={clearRoute} style={{color:'red',height:50}}>heelo</IconButton>

           


        </>
    )

}

export default Map