import axios from 'axios';
import React, { useEffect, useState } from 'react';

const HOC = (WrapperComponent, endPoint) => {
  return function Search() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const getSelectedData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/${endPoint}`);
        setData(response.data[endPoint]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      getSelectedData();
    }, []);

    const filterData = data.filter((d) => {
      if (endPoint === 'users') {
        return d.firstName && d.firstName.toLowerCase().includes(search.toLowerCase());
      } else if (endPoint === 'comments') {
        return d.body && d.body.toLowerCase().includes(search.toLowerCase());
      }
      return false;
    });

    return (
      <div>
        <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
        <WrapperComponent data={filterData ?? []} />
      </div>
    );
  };
};

export default HOC;
