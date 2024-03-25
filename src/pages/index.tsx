import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-center gap-5 p-24 ${inter.className}`}
    >
      <div className="flex w-1/2 flex-col p-8">
        <div className="pb-12 text-8xl">
          The variety <br /> <span className=" text-red-300"> group </span>
        </div>
        <div>Subtitle </div>
      </div>
      <div className="flex w-1/2 flex-col content-center justify-center">
        <div className="text-lg">Video</div>
      </div>
    </main>
  );
}
