import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] }); // [variable, para actualizar la variable]
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setVideos(data);
        setCategories(Object.keys(data));
      });
  }, []);
  return [videos, categories];
};

export default useInitialState;
