import { useState } from 'react'

export const useLocalStorage = (key, initialState) =>{

const [storedValue, setStoredValue] = useState(() =>{
    if (window.localStorage.getItem(key)) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    return initialState;
});

const seValue = newValue => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue))
}
    return [storedValue, setValue];
}