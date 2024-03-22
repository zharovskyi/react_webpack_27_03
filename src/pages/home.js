import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = ({ metaData, setMetaData }) => {
  useEffect(() => {
    setMetaData({
      ...metaData,
      title: 'Home Page',
      description: 'Home page description',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Helmet>
      <h2>Home Page</h2>
      <Link to="/posts/">
        <h2>Posts</h2>
      </Link>
      <Link to="/albums/">
        <h2>Albums</h2>
      </Link>
    </>
  );
};

export default Home;
