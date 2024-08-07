import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          setIsPending(false);
          setError(error.message);
        }
      });

    return () => {
      console.log('cleanup function');
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
