// https://jsonplaceholder.typicode.com/posts

async function listPosts() { //criação de uma função assíncrona que vai pegar uma url e transformar em um arquivo JSON
    const url = "https://jsonplaceholder.typicode.com/posts"; //a const url receber a url jsonplaceholder
    return fetch(url).then((response) => response.json()); //requisição de url atra'ves de promisse, e transforma em arquivo JSON
  }
  
  async function addPost(title, body) { //criação de uma função assíncrona que vai receber os argumentos title e body
    const url = "https://jsonplaceholder.typicode.com/posts";
    const request = { //request serve para enviar nova informação para a fonte
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    };
    console.log(request);
    return fetch(url, request).then((response) => response.json()); //vai pegar a url, a requisição, e transformar em um JSON
  }
  
  function renderPostList(list, posts) {
    list.innerHTML = posts
      .map(({ id, title, body }) => { //método map (callback) que vai pegar um array e transformar em um novo array
        return `
        <article id="post-${id}">
          <h2>${title}</h2>
          ${body}<hr/>
        </article>
      `;
      })
      .join("");
  }
  
  async function app() { //função para definir id e classe aos elementos do HTML
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

