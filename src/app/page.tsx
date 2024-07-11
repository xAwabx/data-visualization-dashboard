import Middle from "@/components/Middle/Middle";
import Top from "../components/Top/Top";
export default function Home() {
  return (
    <div className="p-2 h-[100vh] bg-pink-300 flex flex-col gap-2">
      <Top />
      <Middle />
    </div>
  );
}
