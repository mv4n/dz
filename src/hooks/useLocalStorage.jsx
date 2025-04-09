import {useEffect, useState} from "react";


function useLocalStorage(key) {
    const [hookData, setHookData] = useState();

    useEffect(() => {
        const localDataJSON = localStorage.getItem(key);
        const localData = JSON.parse(localDataJSON);
        if (localData) {
            setHookData(localData);
        }
    }, [])

    function saveData(newData) {

        if (newData) {
            setHookData(newData);
            localStorage.setItem(key, JSON.stringify(newData));
        }
    }

    return [hookData, saveData];
}

export default useLocalStorage