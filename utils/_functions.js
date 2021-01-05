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
  return get("posts");
}

export async function _getPost(id = 0) {
  const posts = Array.from(await get("posts"));
  const res = posts[id];
  return res;
}

export async function _editPost(id, title, content, date = Date.now()) {
  let posts = Array.from(await get("posts"));
  posts[id] = { title, content, date };
  await set("posts", posts);
  return true;
}

export async function _deletePost(id) {
  id = +id;
  let posts = Array.from(await get("posts"));
  posts = posts.filter((post, pid) => pid !== id);
  await set("posts", posts);
  return true;
}
export async function _newPost(title, content, date = Date.now()) {
  let posts = (await get("posts")) || [];
  posts.push({ title, content, date });
  set("posts", posts);
  return true;
}

export async function _doSomething() {
  return wait(5000).then(() => {
    return true;
  });
}
