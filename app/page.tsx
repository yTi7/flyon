import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="h-20 w-full flex items-center justify-center px-20 fixed backdrop-blur">
        <Link href={"/"} className="flex items-center gap-x-2">
          <Image
            src={"/static/images/logo.svg"}
            alt="Flyon Logo"
            width={50}
            height={100}
          />
          <h1 className="from-[#2f2f2f] via-[#aeaeae] to-[#2f2f2f] bg-gradient-to-r bg-clip-text text-transparent font-light text-4xl tracking-[-0.09em]">
            Flyon Studios
          </h1>
        </Link>
      </header>
      <main>
        <section
          id="main"
          className="flex min-h-screen items-center justify-between px-60"
        >
          <div className="w-96 flex flex-col justify-center">
            <h1 className="font-[Badgline] text-6xl">
              Turning Dreams into Design:
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
              // allowfullscreen="false"
            ></iframe>
            <div className="buttons flex justify-end gap-x-5 py-5">
              <Link
                href={"/"}
                className="px-5 py-3 bg-purple-700 rounded transition-all border-[1px] border-purple-700 hover:font-bold hover:bg-black hover:text-purple-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="flex justify-center items-center flex-col h-screen gap-3"
        >
          <div className="h-[60%] flex flex-col justify-center items-center">
            <h1 className="text-7xl font-[StretchPro]">About Us</h1>
            <div className="grid grid-cols-2">
              <Image
                src={"/static/images/team_working_together.png"}
                alt="Image of a team working together"
                height={100}
                width={100}
              />
              <p className="text-xl">
                Welcome to Flyon Studios.
                <br />
                Comprised of a dynamic team of passionate individuals, we are
                your partners in propelling brands to new heights.
                <br />
                Our expertise lies in harnessing the true power of content
                through Video editing, SEO Optimization, Youtube Channel
                management, Graphic Designing and Thumbnail creation.
                <br />
                With shared commitment to creativity, we transform ideas into
                captivating visual stories, ensuring your brand's narrative
                resonates across digital landscapes.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
