import Header from "../components/common/Header";
import SEO from "../components/common/SEO";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-5">
        <SEO />
      </div>
    </>
  );
}
