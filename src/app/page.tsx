import Link from "next/link";
import mockData from "../mockData.json";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap">
        {mockData.map((item) => (
          <img
            key={item.key}
            src={item.url}
            alt={item.title}
            className="w-1/4"
          />
        ))}
      </div>
    </main>
  );
}
