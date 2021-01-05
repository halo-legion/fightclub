import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
import { _deletePost } from "../../../utils/_functions";

export default function Delete() {
  const router = useRouter();
  const { addToast } = useToasts();

  const { id } = router.query;

  useEffect(() => {
    id &&
      _deletePost(id).then((res) => {
        if (res) {
          router.push("/dashboard");
          addToast("Story deleted successfully", { appearance: "error" });
        }
      });
  }, [id]);

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
        <div className="flex justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-indigo-600">Deleting...</h1>
        </div>
      </main>
    </div>
  );
}
