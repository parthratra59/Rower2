import React, { useState, useEffect } from 'react'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { db } from './authotication/firebase.js';
import Rides from './rides.jsx';
const Published = () => {

    const [rides, setRides] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'publishedRides'));
        const unsubcribe = onSnapshot(q, (querySnapshot) => {
            let ridesArr = []
            querySnapshot.forEach((doc) => {
                ridesArr.push({ ...doc.data(), id: doc.id })
            });
            setRides(ridesArr)
        })
        return () => unsubcribe()
    }, [])

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
