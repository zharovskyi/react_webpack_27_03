import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostItem from '../components/postItem';
import { Helmet } from 'react-helmet';
import getDataByID from '../api/getDataByID';

const Post = ({ metaData, setMetaData, resource }) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (id) {
      getDataByID(resource, id).then(posts => {
        setPost(posts);
        if (posts.length > 0) {
          setMetaData({
            ...metaData,
            title: posts[0].title,
            description: posts[0].body,
          });
          setDataLoaded(true);
        }
      });
    }
  }, []);

  return (
    <div>
      {dataLoaded && (
        <div>
          <Helmet>
            <title>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
          </Helmet>
          {post.map(item => (
            <PostItem key={item.id} id={item.id} title={item.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
