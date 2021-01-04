import { get, set } from "./_idb.ts";

const wait = (delay, ...args) =>
  new Promise((resolve) => setTimeout(resolve, delay, ...args));

export async function _init() {
  if (localStorage.getItem("user") === null) {
    return false;
  }
  return true;
}

export async function _setUser(formData) {
  const data = JSON.stringify(formData);
  localStorage.setItem("user", data);
  return true;
}

export async function _getPosts() {
  return JSON.parse(get("posts"));
}

export async function _newPost(title, content) {
  let posts = await get("posts") || []
//   console.log(await get("posts"))
  posts.push({ title, content });
  await set("posts", posts);
  return true;
}

export async function _doSomething() {
  return wait(5000).then(() => {
    return true;
  });
}
