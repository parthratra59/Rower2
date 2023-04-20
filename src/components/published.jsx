import React, { useState, useEffect } from 'react'
import { query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc, where } from 'firebase/firestore';
import { db } from './authotication/firebase.js';
import { useUserAuth } from "./authotication/context/UserAuthContext.js";
import Rides from './rides.jsx';


const Published = () => {

    const { user } = useUserAuth();
    const [email, setemail] = useState('');


    const [rides, setRides] = useState([]);



    useEffect(() => {

        const q = query(collection(db, 'publishedRides'), where("email", "==", user.email));
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
            <h1 style={{ fontSize: "40px" ,marginLeft: "15%" }}>{user.email}</h1>
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
