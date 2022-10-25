import Header from "../components/common/Header";
import SEO from "../components/common/SEO";
import UserCard from "../components/professional/UserCard";
import UserCardsFlex from "../components/professional/UserCardsFlex";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <UserCardsFlex />
    </>
  );
}
