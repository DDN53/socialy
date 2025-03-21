"use client";
import Image from "next/image";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export default function Home() {
  return (
    <>
      <ClerkProvider>
        <SignedOut>
          <SignInButton mode="modal" className="bg-red-500" />
         
        </SignedOut>
       
      </ClerkProvider>
    </>
  );
}
