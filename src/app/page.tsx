import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignedOut,
} from '@clerk/nextjs';

export default function Home() {
  return (
    <ClerkProvider>
      <Navbar />
      <SignedOut>
        <SignInButton mode="modal" className="bg-red-500 mr-5">
          Sign In
        </SignInButton>
      </SignedOut>
      <Button className="ml-3">
        Click Me
      </Button>
    </ClerkProvider>
  );
}