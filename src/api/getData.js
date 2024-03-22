
const getData = async (resource) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${resource}`,
    );
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.log('Error fetching posts:', error);
    return [];
  }
};

export default getData;