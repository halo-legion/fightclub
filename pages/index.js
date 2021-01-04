import Head from "next/head";
import GoalForm from '../components/GoalForm';

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>👊</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center h-full flex-col">
        <div className="w-1/4 space-y-4">
          <h1 className="text-5xl text-center font-bold text-white">Fight 👊 Club</h1>
          <div className="border border-gray-400 rounded-lg p-8 shadow-2xl">
            <GoalForm />
          </div>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          font-family: Roboto;
        }
      `}</style>
    </div>
  );
}
