//custom hooks are very useful when you need to share logic between components
//its good practice to precede them with 'use'

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;

//we will then import useFetch in the cmponents that need this logic