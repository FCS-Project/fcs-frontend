import Header from "../components/common/Header";
import SEO from "../components/common/SEO";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-5">
        <SEO />
        <h1 className="font-bold text-4xl mt-5 text-theme">
          FCS project is up and running!
        </h1>
      </div>
    </>
  );
}
