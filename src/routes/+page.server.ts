
export const load = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  // const data = await res.json();
const data = [
      { id: 1, title: "Product 1", category: "Shoes", price:"2000",color:"blue" },
      { id: 2, title: "Product 2", category: "Bag", price:"3000",color:"red" },
      { id: 2, title: "Product 2", category: "Watch", price:"5000",color:"black"},
      { id: 1, title: "Product 1", category: "Shoes", price:"2000",color:"blue" },
      { id: 2, title: "Product 2", category: "Bag", price:"3000",color:"red" },
      { id: 2, title: "Product 2", category: "Watch", price:"5000",color:"black"},
      { id: 1, title: "Product 1", category: "Shoes", price:"2000",color:"blue" },
      { id: 2, title: "Product 2", category: "Bag", price:"3000",color:"red" },
      { id: 2, title: "Product 2", category: "Watch", price:"5000",color:"black"},
      { id: 1, title: "Product 1", category: "Shoes", price:"2000",color:"blue" },
      { id: 2, title: "Product 2", category: "Bag", price:"3000",color:"red" },
      { id: 2, title: "Product 2", category: "Watch", price:"5000",color:"black"},
      { id: 1, title: "Product 1", category: "Shoes", price:"2000",color:"blue" },
      { id: 2, title: "Product 2", category: "Bag", price:"3000",color:"red" },
      { id: 2, title: "Product 2", category: "Watch", price:"5000",color:"black"}
  ];
  return { data };
};

