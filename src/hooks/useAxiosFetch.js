import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosFetch = (dataURL) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataURL);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dataURL]);

  return { data, isLoading, error };
};

export default useAxiosFetch;
