import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="p-5">
      <SEO />
      <h1 className="font-bold text-4xl mt-5 text-theme">
        FCS project is up and running!
      </h1>
    </div>
  );
}
