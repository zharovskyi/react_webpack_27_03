const getDataByID = async (resource, id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}?id=${id}`,
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log('Error fetching posts:', error);
    return [];
  }
};

export default getDataByID;
