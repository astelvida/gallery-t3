import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SimpleUploadButton from "./SimpleUploadButton";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b-2 p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
