import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Editor from "rich-markdown-editor";
import { _newPost } from "../_functions";
import { sampleStory } from "./__content";
import NProgress from 'nprogress';

export default function New() {
  const [title, setTitle] = useState();
  const [content, setContent] = useState(sampleStory);
  const router = useRouter();

  const handleSubmit = () => {
      NProgress.start();
      _newPost(title, content).then(res => {
          console.log(res)
          if(res) NProgress.done();
      })
  };
  return (
    <div className="h-full">
      <Head>
        <title>👊</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white">👊 Fight Club</h1>
        </div>
        <div className="flex">
          <div id="editor" className="w-3/4 flex flex-col space-y-4 p-8">
            <div className="text-white text-4xl p-4">
              <Editor
                defaultValue={title}
                //   theme
                placeholder="The heading of your story."
                onChange={(val) => setTitle(val())}
                dark
              />
            </div>
            <div className="text-white text-xl p-4">
              <Editor
                defaultValue={content}
                placeholder="Your story begins from here..."
                onChange={(val) => setContent(val())}
                dark
              />
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col space-y-4">
              <button className="btn btn-blue" onClick={handleSubmit}>
                Save
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
