import { useCallback } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHPData = useCallback(async () => {
    const response = await axios.get(url);
    const dataHP = await response.data;

    setLoading(false);
    setData(dataHP);
  }, [url]);

  useEffect(() => {
    fetchHPData();
  }, [fetchHPData]);

  return { loading, data };
};