import Head from "next/head";

export default function Home() {
  return (
    <div className="p-5">
      <Head>
        <title>FCS Project</title>
      </Head>
      <h1 className="font-bold text-4xl mt-5 text-black">
        FCS project is up and running!
      </h1>
    </div>
  );
}
