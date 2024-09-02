
export const load = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  // const data = await res.json();
const data = [
      { id: 1, title: "Product 1", category: "Nature" },
      { id: 2, title: "Product 2", category: "Animals" },
      { id: 2, title: "Product 2", category: "aa" }
  ];
  return { data };
};

