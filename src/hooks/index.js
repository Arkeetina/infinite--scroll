import { useEffect, useState } from "react";

export const useFetchApi = api => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setError();
    setIsLoading(true);
    api()
      .then(value => {
        setData(value.data);
      })
      .catch(e => {
        setError(e);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [api]);
  return { data, error, isLoading };
};
