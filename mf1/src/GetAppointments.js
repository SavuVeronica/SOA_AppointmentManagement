import { useState, useEffect } from 'react';

const useFetch = (url = 'http://localhost:4000/appointments', options = null) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data));
  }, [url, options]);
  return {data}
}
export default useFetch;