// https://jsonplaceholder.typicode.com/posts

async function listPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return fetch(url).then((response) => response.json());
  }
  
  async function addPost(title, body) {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const request = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    };
    console.log(request);
    return fetch(url, request).then((response) => response.json());
  }
  
  function renderPostList(list, posts) {
    list.innerHTML = posts
      .map(({ id, title, body }) => {
        return `
        <article id="post-${id}">
          <h2>${title}</h2>
          ${body}<hr/>
        </article>
      `;
      })
      .join("");
  }
  
  async function app() {
    const [postList, titleField, bodyField, addButton] = [
      ".posts",
      "#titleField",
      "#bodyField",
      "#insertButton",
    ].map((selector) => document.querySelector(selector));
  
    const posts = await listPosts();
    addButton.addEventListener("click", async () => {
      posts.unshift(await addPost(titleField.value, bodyField.value));
      titleField.value = "";
      bodyField.value = "";
  
      renderPostList(postList, posts);
    });
  
    renderPostList(postList, posts);
  }
  
  app();

