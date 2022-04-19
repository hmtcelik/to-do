import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont =  new AbortController();  

        fetch(url, { signal: abortCont.signal })
          .then(res => {
            if(!res.ok){ //burdaki ok degeri res'ten geliyor yani kendi degiskeni
              // eger ok true degilse yani baglanamiyorsa fetch'te burda erroru yakaliyoruz
              throw Error('could not fetch the data for that resource'); //buda console yaziyor
            }
            return res.json();
          })
          .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch(error => {
            if (error.name === 'AbortError'){
              console.log("catched");
            }
            else {
              setIsPending(false);
              setError(error.message);  
            }
          })

        return () => abortCont.abort();
      }, [url]) // this [] is allow just apply on first reload 
    
    return {data, isPending, error}

}
export default useFetch;