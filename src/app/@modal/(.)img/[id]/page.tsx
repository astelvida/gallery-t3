import React from "react";
import { getImage } from "~/server/db/queries";
import { Modal } from "./modal";

const ImageModal = async ({ params }: { params: { id: string } }) => {
  const image = await getImage(Number(params.id));

  return (
    <Modal>
      <img src={image.url} className="w-96" />
    </Modal>
  );
};

export default ImageModal;
