"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { UploadButton } from "~/utils/uploadthing";

const SimpleUploadButton = () => {
  const router = useRouter();
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        router.refresh();
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};

export default SimpleUploadButton;
