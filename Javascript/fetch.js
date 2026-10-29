// async function fetchData() {
//   let url = "https://jsonplaceholder.typicode.com/posts";

//   try {
//     const response = await fetch(url);
//     // console.log(response);
//     if (!response.ok) {
//         throw new Error("Error");
//     }

//     const data = await response.json();
//     console.log(data);
//   } catch {
//     console.log("error");
//   }
// }

// fetchData();

// Through Promise Chaining
// fetch('https://jsonplaceholder.typicode.com/posts')
//  .then((response) => response.json())
//  .then((data) => console.log(data))
//  .catch(() => console.log("error"));

// POST Request through Fetch()

// async function postData() {
//   let url = "https://jsonplaceholder.typicode.com/posts";
//   let post = {
//     title: "First Post",
//     body: "This is my first post",
//     id: 1,
//   };

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(post),
//     });

//     if (!response.ok) {
//       throw new Error("Error");
//     }

//     const createdPost = await response.json();
//     console.log("Created post:", createdPost);

//   } catch {
//     console.log("error");
//   }
// }

// postData();

// PUT Request through Fetch

// async function updateData() {
//   let url = "https://jsonplaceholder.typicode.com/posts/1";
//   let updatedPost = {
//     title: "Updated Post",
//     body: "This is my updated post",
//     id: 1,
//   };

//   try {
//     const response = await fetch(url, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedPost),
//     });

//     if (!response.ok) {
//       throw new Error("Error");
//     }

//     const createdPost = await response.json();
//     console.log("Updated post:", createdPost);

//   } catch {
//     console.log("error");
//   }
// }

// updateData();

// DELETE Request through Fetch

async function deletePost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      },
    );

    if (!response.ok) throw new Error("error");

    if (response.status === 204) {
      console.log("Deleted; no response body.");
      return;
    }
    const deletedData = await response.json();
    console.log(deletedData);
    
  } catch {
    console.log("error");
  }
}
deletePost();
