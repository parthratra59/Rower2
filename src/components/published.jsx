import React, { useState, useEffect } from 'react'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from './authotication/firebase.js';
import { useUserAuth } from "./authotication/context/UserAuthContext.js";
import Rides from './rides.jsx';
const Published = () => {
    const { logOut, user } = useUserAuth();

    const [rides, setRides] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'publishedRides'));
        const unsubcribe = onSnapshot(q, (querySnapshot) => {
            let ridesArr = []

            querySnapshot.forEach((doc) => {
                // if (user.email === doc.email) {
                ridesArr.push({ ...doc.data(), id: doc.id })
                // }
            });
            setRides(ridesArr)
        })
        return () => unsubcribe()
    }, [user])

    return (
        <div>
            {rides.map((ride, index) =>
            (
                <Rides
                    ride={ride}
                    key={index} />
            )
            )}
        </div>
    )
}

export default Published;
