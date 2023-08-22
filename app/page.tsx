import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="h-20 w-full flex items-center justify-center px-20 absolute">
        <Link href={"/"} className="flex items-center gap-x-2">
          <Image
            src={"/static/images/logo.svg"}
            alt="Flyon Logo"
            width={50}
            height={100}
          />
          <h1 className="from-[#2f2f2f] via-[#aeaeae] to-[#2f2f2f] bg-gradient-to-r bg-clip-text text-transparent font-light text-4xl tracking-[-0.09em]">Flyon Studios</h1>
        </Link>
      </header>
      <main className="flex min-h-screen items-center justify-between px-60">
        <div className="w-96 flex flex-col justify-center">
          <h1 className="font-[Badgline] text-6xl">
            Turning Dreams into Design:{" "}
          </h1>
          <h1 className="font-[StretchPro] text-8xl">
            Your Dreams our Creation
          </h1>
        </div>
        <div className="right_group">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zVLKk-DueSU?controls=0"
            title="Show reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="false"
          ></iframe>
          <div className="buttons flex justify-end gap-x-5 py-5">
            <button>Contact Us</button>
            <button>Download Brochure</button>
          </div>
        </div>
      </main>
    </>
  );
}
