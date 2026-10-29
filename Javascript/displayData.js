console.log("Hello");

const btn = document.querySelector("button");
const list = document.querySelector("#list");
// async function fetchData() {}

btn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) throw new Error("Error");

    const data = await response.json();

    for (let post of data) {
      const li = document.createElement("li");
      li.textContent = post.body;
      list.appendChild(li);
    }
  } catch {
    console.log("Error from catch");
  }
});
