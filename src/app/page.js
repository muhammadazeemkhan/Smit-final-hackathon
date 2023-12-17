"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "antd";

export default function Home() {
  const router = useRouter();

  const handleOnclickAllStudents = () => {
    router.push("/Auth");
  };

  return (
    <main className="flex justify-center items-center mt-48">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mb-4">SMIT Attendence Mangement System</h1>
        <button
          onClick={handleOnclickAllStudents}
          className="relative py-2 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-300 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
