import React, {useState,useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode =(initialVallues, key)=>{
    const[values, setValues] = useLocalStorage(initialValues, key);
useEffect(()=>{
    if(values === true){
        body.classList.add('dark-mode');
    } else{
        body.classList.remove('dark-mode');
    }
}
//not sure what goes here..?[]
);
return[values, setValues];
}