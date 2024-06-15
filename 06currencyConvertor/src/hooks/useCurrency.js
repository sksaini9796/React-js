import {useState, useEffect} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
   
    .then((res) => res.join())
    .then((res) => setData(res[currency]))
    console.log(data);

    }, [currency])
    
    return 
}