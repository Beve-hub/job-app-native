import { useState, useEffect } from "react";
import axios from "axios";
 

const useFetch = ({endpoint}) => {
  
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
  
   
   const url: `https://jsearch.p.rapidapi.com/${endpoint}`;

   useEffect(() => {
      axios.get(url)
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch (error) {
        setIsLoading(false)
        setError(error);
        alert('There is an error')
      }
   }, [data])

   
   

{/*const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': 
    'a46ab7ed82msh99d6971629852b0p16c1a3jsnec10ba166c0c',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: { ...query },
};


const  fetchData = async () => {
  setIsLoading(true);

  try {
    const response = await axios.request(options);

    setData(response.data.data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    alert('There is an error')
  } finally {
    setIsLoading(false);
  }
}

 useEffect(() => {
  fetchData();
 },[])

 const reFetch = () => {
  setIsLoading(true);
  fetchData()
 }*/}

 return {data, isLoading, error, refetch};
}

export default useFetch;