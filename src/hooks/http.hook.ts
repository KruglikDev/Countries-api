import {useCallback, useState} from "react";

export const useHttp = () => {
    const [condition, setCondition] = useState('');

    const request = useCallback(async (url:string) => {
        //Set condition to loading, to know when to show spinner
        setCondition('loading');

        //Fetching data from api
        try {
            const response = await fetch(url, {
                body: null,
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(!response.ok) {
                throw new Error('Couldn"t fetch data');
            }

            const data = await response.json();
            return data;

        } catch (err) {
            //We will show special error image when condition 'error'
            setCondition('error');
            throw err;
        }
    }, [])

    const clearError = () => {
        setCondition('loading');
    }

    return {
        request,
        clearError,
        condition,
        setCondition
    }
}
