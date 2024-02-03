import { useEffect, useState } from "react";

const useFetch = () => {
  const [weather, setWeather] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (term) => {
    setSearchTerm(term);
  };

  // Fetch weather Info
  useEffect(() => {
    async function fetchWeather() {
      const key = "f19ee33f26b875208d3c817734ad8be7";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${key}&units=Metric`
      );
      const data = await response.json();
      setWeather(data);
    }

    if (searchTerm) {
      fetchWeather();
    }
  }, [searchTerm]);

  return { weather, updateSearchTerm };
};

export default useFetch;
