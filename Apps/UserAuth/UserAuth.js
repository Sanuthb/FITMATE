import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { firebaseauth } from '../../firebase'

const UserAuth = () => {
    const [fitmateuser,setfitmateuser] =useState()
    useEffect(()=>{
        const unsub=onAuthStateChanged(firebaseauth,user=>{
            if(user){
                setfitmateuser(user);
            }
            else{
                setfitmateuser(null);
            }
        })
        return unsub;
    },[])
    return{
        fitmateuser
    }
}

export default UserAuth
