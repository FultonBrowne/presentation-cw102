import Image from "next/image";
import { Kanit } from "next/font/google";

const kanit = Kanit({ subsets: ["latin"], weight: "800" });

export default function Home() {
  const STYLES = {
    videoIframeContainer: { padding: "56.25% 0 0 0", position: "relative" },
    videoIframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  };
  return (
    <main
      className={`flex md:flex-row flex-col min-h-screen  items-center gap-5 p-24 ${kanit.className}`}
    >
      <div className="flex  md:w-1/2 flex-col p-8">
        <div className="pb-12 text-5xl md:text-9xl">
          The variety <br /> <span className=" text-red-300"> group </span>
        </div>
        <div>United by randomness </div>
      </div>
      <div className="flex w-full md:w-1/2 content-center justify-center">
        <div>
          <iframe
            title="vimeo-player"
            src={"https://player.vimeo.com/video/937431956"}
            width="400"
            height="360"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
