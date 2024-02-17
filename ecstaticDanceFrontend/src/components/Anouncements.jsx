import { useEffect, useState } from "react";
import InfoBlock from "./InfoBlock";

export default function Announcements() {
  const PROJECT_ID = "tjb2eob3";
  const DATASET = "production";

  const QUERY = encodeURIComponent('*[_type == "information"]');

  const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  
  const [data, setData] = useState(undefined);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(URL)
          
          if(!response.ok) throw Error('Failed to load data!');

          const data = await response.json();
          setData(data);
      };
      fetchData();
  }, [URL]);

  console.log(data);

if (!data) return;

  return (
  data.result.map(entry => {
    const {title, content, id} = entry;
    return <InfoBlock key={title} title={title} content={content} id={id} />
  })
  )
}
  