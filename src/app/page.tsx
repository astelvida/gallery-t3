import Link from "next/link";
import { db } from "../server/db/index";
import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  // console.log(images);
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url} alt={image.name} />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedIn>
        <Images />
      </SignedIn>
      <SignedOut>
        <div className="h-full w-full text-center">Please Sign In</div>
      </SignedOut>
    </main>
  );
}
