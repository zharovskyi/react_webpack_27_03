import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostItem from '../components/postItem';
import getData from '../api/getData';
import { Helmet } from 'react-helmet';
import useGetDataSearch from '../hooks/useGetDataSearch';

const Posts = ({ metaData, setMetaData }) => {
  const {
    filteredData,
    handleChange,
    searchValue,
    handleSortChange,
    sortValue,
  } = useGetDataSearch([], () => getData('posts'));

  useEffect(() => {
    if (filteredData.length > 0) {
      setMetaData({
        ...metaData,
        title: 'Posts page',
        description: 'posts descriptions',
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
            ? filteredData.map(post => {
                return (
                  <Link key={post.id} to={`${post.id}`}>
                    <PostItem title={post.title} />
                  </Link>
                );
              })
            : 'Not found'}
        </div>
      </section>
    </>
  );
};

export default Posts;
