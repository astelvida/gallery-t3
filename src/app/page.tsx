import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/db/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={image.name}
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
            />
          </Link>
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
