import Header from "../components/common/Header";
import SEO from "../components/common/SEO";
import UserCard from "../components/professional/UserCard";

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <div className="py-20 flex flex-wrap">
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
        <UserCard
          desc={
            "Max Healthcare Institute Limited is a hospital chain based in New Delhi, India. Max Healthcare owns and operates healthcare facilities across the National Capital Region of Delhi, North India, and the western port city of Mumbai."
          }
          location={"Saket, New Delhi, Delhi, 110017"}
        />
      </div>
    </>
  );
}
