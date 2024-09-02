export const load = async () => {
  const res = await fetch("https://my-json-server.typicode.com/sameeragajanayaka/productlistdb/posts");
  const data = await res.json();
  return { data };
};

