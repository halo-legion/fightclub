import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { _getPosts } from "../../utils/_functions";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    _getPosts().then((res) => setPosts(res));
  }, []);
  return (
    <div className="h-full">
      <Head>
        <title>👊</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white cursor-pointer">
            👊 Fight Club
          </h1>
        </div>
        <div className="flex">
          <div id="editor" className="flex flex-col w-8/12 p-16">
            <div className="space-y-2">
              {posts && posts.length > 0 ? (
                posts.map((post, id) => (
                  <div
                    key={post.title}
                    className="text-white flex flex-col border-2 border-gray-400 rounded-lg p-8 shadow-2xl"
                  >
                    <div className="flex flex-wrap text-sm">
                      <h1 className="flex-auto font-bold">
                        {format(new Date(post.date), "eeee, MMMM do")}
                      </h1>
                      <h1 className="text-gray-500 font-bold">
                        {formatDistance(new Date(post.date), new Date(), {
                          addSuffix: true,
                        })}
                      </h1>
                    </div>
                    <div className="mt-5">
                      <p className="truncate font-normal">{post.title}</p>
                      <div className="mt-4 flex flex-wrap space-x-2 font-bold text-sm">
                        <div className="link">
                          <Link href={`/dashboard/${id}`}>Read/Edit</Link>
                        </div>
                        <div className="link link-danger">
                          <Link href={`/dashboard/delete/${id}`}>Delete</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="text-gray-400 text-2xl font-bold">You haven't created any stories..</h1>
              )}
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col space-y-4">
              <Link href="/dashboard/new">
                <button className="btn btn-blue">New Story</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
