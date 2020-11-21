import { useEffect, useState } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState({});

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setVideos(res);
      });
  }, []);

  return videos;
};

export default useInitialState;
