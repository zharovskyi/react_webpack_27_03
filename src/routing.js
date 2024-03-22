import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Post from './pages/post';
import Home from './pages/home';
import Albums from './pages/albums';
import Posts from './pages/posts';
import NotFound from './pages/NotFound';

const Routing = ({ metaData, setMetaData }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home metaData={metaData} setMetaData={setMetaData} />}
      />
      <Route
        path="/posts/"
        element={<Posts metaData={metaData} setMetaData={setMetaData} />}
      />
      <Route
        path="posts/:id"
        element={
          <Post
            metaData={metaData}
            setMetaData={setMetaData}
            resource="posts"
          />
        }
      />
      <Route
        path="/albums/"
        element={<Albums metaData={metaData} setMetaData={setMetaData} />}
      />
      <Route
        path="albums/:id"
        element={
          <Post
            metaData={metaData}
            setMetaData={setMetaData}
            resource="albums"
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Routing;
