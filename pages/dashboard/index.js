import Head from "next/head";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="h-screen">
      <Head>
        <title>👊</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center h-full flex-col">
        <div className="w-1/4 space-y-4">
          <h1 className="text-5xl text-center font-bold text-white">
            Fight 👊 Club
          </h1>
          <div className="border border-gray-400 rounded-lg p-8 shadow-2xl text-white flex flex-col space-y-4">
            Dashboard
            <Link href="/">
              <button className="btn btn-danger">Go Back</button>
            </Link>
            <Link href="/dashboard/new">
              <button className="btn btn-blue">New Story</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
