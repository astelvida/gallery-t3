import React from "react";
import { deleteImage, getImage } from "~/server/db/queries";

const ImagePage = async ({ params }: { params: { id: string } }) => {
  const image = await getImage(Number(params.id));

  return (
    <div className="w-full">
      <img src={image.url} className="w-96" />
      <form
        action={async () => {
          "use server";
          await deleteImage(Number(image.id));
        }}
      >
        <button type="submit" className="rounded bg-blue-500 p-2 text-white">
          Delete
        </button>
      </form>
    </div>
  );
};

export default ImagePage;
