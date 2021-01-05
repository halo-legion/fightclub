import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import Editor from "rich-markdown-editor";
import { _getPost, _editPost, _deletePost } from "../../utils/_functions";
import NProgress from "nprogress";

export default function Post() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [editing, setEditing] = useState(true);

  const router = useRouter();
  const { addToast } = useToasts();

  const { id } = router.query;

  useEffect(() => {
    id &&
      _getPost(id).then((post) => {
        setTitle(post.title);
        setContent(post.content);
      });
  }, [id]);

  const handleEdit = () => {
    if (editing) {
      setEditing(false);
    }
    if (!editing) {
      NProgress.start();
      _editPost(id, title, content).then((res) => {
        if (res) {
          setEditing(true);
          NProgress.done();
          addToast("Story updated successfully", { appearance: "success" });
        }
      });
    }
  };

  const handleDelete = () => {
    NProgress.start();
    _deletePost(id).then((res) => {
      if (res) {
        NProgress.done();
        router.push("/dashboard");
        addToast("Story deleted successfully", { appearance: "error" });
      }
    });
  };
  if (content === undefined || title === undefined) return null;

  return (
    <div className="h-full">
      <Head>
        <title>👊</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="p-8">
          <h1
            className="text-4xl font-bold text-white cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            👊 Fight Club
          </h1>
        </div>
        <div className="flex">
          <div id="editor" className="w-3/4 flex flex-col space-y-4 p-8">
            <div className="text-white text-4xl p-4">
              <Editor
                defaultValue={title}
                placeholder="The heading of your story."
                readOnly={editing}
                onChange={(val) => setTitle(val())}
                dark
              />
            </div>
            <div className="text-white text-xl p-4">
              <Editor
                defaultValue={content}
                placeholder="The heading of your story."
                readOnly={editing}
                onChange={(val) => setContent(val())}
                dark
              />
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col space-y-4">
              <button className="btn btn-blue" onClick={handleEdit}>
                {editing ? "Edit" : "Save"}
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
