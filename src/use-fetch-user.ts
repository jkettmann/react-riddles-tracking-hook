import { useEffect, useState } from "react";

export function useFetchUser() {
  const [data, setData] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setData("John Doe");
      setIsLoading(false);
    }, 1000);
  }, []);

  return { data, isLoading };
}
