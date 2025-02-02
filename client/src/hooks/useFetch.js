import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
         const baseUrl = import.meta.env.VITE_API_URL;
         const url = `${baseUrl}${endpoint}`;
        // console.log(`Fetching: ${url}`);
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(true);
        //   console.error(`Error fetching data: ${error}`); 
      }
      setLoading(false);
    };
    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
