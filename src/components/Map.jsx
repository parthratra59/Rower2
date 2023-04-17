//  google map box
import React, { useState } from "react";
// import Registration from "../Registration";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";

const center = { lat: 48.84, lng: 2.29 }
const Map = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        // once it will we loaded then we want places to load again
        libraries: ['places']
    })

    const [map, setMap] = useState(null)




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
                    mapTypeControl: false,
                    fullscreenControl: false,

                }}
                onLoad={map => setMap(map)}
            >



                <Marker position={center} />

            </GoogleMap>


        </>
    )

}
export default Map;