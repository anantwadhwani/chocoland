"use client";
import React from "react";
import Image from "next/image";
import instagramLogo from '../lib/image/brand/instagram.svg';
import { useRouter } from "next/navigation";
import ReduxProvider from "@/redux/ReduxProvider";

export default function Home() {
  const router = useRouter();
  const handleMilkClick = () => {
    router.push('/milk')
  }
  const handleSpreadClick = () => {
    router.push('/spread')
  }
  const handleChocolateClick = () => {
    router.push('/chocolate')
  }

  return (
      <div className="min-h-screen">
        <h1 className="text-9xl p-4">
          Our Delicacies
        </h1>
        <div className="flex flex-row w-full justify-center my-10 text-center">
          <div id='milkSpan' className="border-2 rounded-4xl p-4 w-1/2 self-center mr-4" onClick={handleMilkClick}>
            <h2 className="text-4xl">Daily Healthy Tasty Milk</h2>
            <Image src={instagramLogo} alt="Milk Containers"></Image>
          </div>
          <div className="w-1/3">
            <div className="border-2 rounded-4xl p-4 mb-4" onClick={handleSpreadClick}>
              <h2 className="text-4xl">Spreads</h2>
              <Image src={instagramLogo} alt="Bread Spreads"></Image>
            </div>
            <div className="border-2 rounded-4xl p-4" onClick={handleChocolateClick}>
              <h2 className="text-4xl">Chocolates</h2>
              <Image src={instagramLogo} alt="Chocolates"></Image>
            </div>
          </div>
        </div>
      </div>
  );
}
