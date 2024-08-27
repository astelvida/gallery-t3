import Link from "next/link";
import { db } from "../server/db/index";

// export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  console.log(images);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap">
        {images.map((item) => (
          <div key={item.url} className="flex w-48 flex-col">
            <img src={item.url} alt={item.name} />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
