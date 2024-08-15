// async-await

async function fetchData(){
   
    const res=await fetch("https://jsonplaceholder#.typicode.com/posts");
    console.log("🚀 ~ fetchData ~ res:", res)
    const data=await res.json();
    console.log("🚀 ~ fetchData ~ data:", data)
    console.log("🚀 ~ data:", data)
}
  fetchData();

