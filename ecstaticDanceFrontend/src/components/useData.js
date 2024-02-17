import { useEffect, useState } from "react";

export default function useData(query) {
    const PROJECT_ID = "tjb2eob3";
    const DATASET = "production";

    const QUERY = encodeURIComponent(query);

    const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
    
    const [data, setData] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL)
            
            if(!response.ok) throw Error('Failed to load data!');
  
            const {result} = await response.json();
            setData(result);
            console.log('data arrived', result);
        };
        fetchData();
    }, [URL]);

    return [data, setData];
}