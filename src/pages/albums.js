import { Helmet } from 'react-helmet';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostItem from '../components/postItem';
import getData from '../api/getData';
import useGetDataSearch from '../hooks/useGetDataSearch';

const Albums = ({ metaData, setMetaData }) => {
  const {
    filteredData,
    handleChange,
    searchValue,
    handleSortChange,
    sortValue,
  } = useGetDataSearch([], () => getData('albums'));

  useEffect(() => {
    if (filteredData.length > 0) {
      setMetaData({
        ...metaData,
        title: 'Albums page',
        description: 'Albums descriptions',
      });
    }
  }, [filteredData]);

  return (
    <>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Helmet>
      <section>
        <input
          type="text"
          placeholder="Search by name"
          onChange={handleChange}
          value={searchValue}
        />
        <select onChange={handleSortChange} value={sortValue}>
          <option value="">Sort by name</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <div>
          {filteredData.length > 0
            ? filteredData.map(album => {
                return (
                  <Link key={album.id} to={`${album.id}`}>
                    <PostItem title={album.title} />
                  </Link>
                );
              })
            : 'Not found'}
        </div>
      </section>
    </>
  );
};

export default Albums;
