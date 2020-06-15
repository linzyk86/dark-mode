import React, {useState,useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';
import '../styles.scss';

export const useDarkMode =(initialValues, key)=>{
    const[toggle, setToggle] = useLocalStorage(initialValues, key);
useEffect(()=>{

    if(toggle === true){
        document.body.classList.add('dark-mode');
        console.log('true');
    } else{
       document.body.classList.remove('dark-mode');
       console.log('false');
    }
},[toggle]);
  const toggleSwitch = e => {
        setToggle(!toggle);
    };

return[toggle, toggleSwitch];
}