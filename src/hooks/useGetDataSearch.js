import { useEffect, useState } from 'react';

const useGetDataSearch = (initialData, fetchData) => {
  const [data, setData] = useState(initialData);
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('');

  useEffect(() => {
    fetchData().then(data => {
      setData(data);
    });
  }, []);

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSortChange = event => {
    setSortValue(event.target.value);
  };

  const filteredData = searchValue
    ? data.filter(item => item.title.toLowerCase().includes(searchValue))
    : data;

  const sortedData = sortValue
    ? filteredData.toSorted((a, b) =>
        sortValue === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title),
      )
    : filteredData;

  return {
    filteredData: sortedData,
    handleChange,
    searchValue,
    handleSortChange,
    sortValue,
  };
};

export default useGetDataSearch;
