import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-9xl font-bold text-black dark:text-white">Charlie Webb</h1>
        </header>

        <section className="flex flex-col items-center justify-center border-2 border-black dark:border-white p-8">
          <h2 className="text-4xl font-bold mb-6 text-black dark:text-white">About Me</h2>

          <div className="mb-8">
            <Image
              src="/headshot.jpg"
              alt="Charlie Webb"
              width={1936/3}
              height={1184/3}
              className="rounded"
            />
          </div>

          <p className="text-lg mb-8 text-black dark:text-white">I write code and catch light</p>

          <div className="flex gap-16 text-lg font-semibold">
            <a href="https://www.linkedin.com/in/webb-charles/" className="hover:opacity-70 transition-opacity">
              <Image
                src="/in-black.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <Image
                src="/in-white.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="hidden dark:block"
              />
            </a>
            <a href="https://github.com/cwebb612" className="hover:opacity-70 transition-opacity">
              <Image
                src="/github-black.png"
                alt="GitHub"
                width={24}
                height={24}
                className="dark:hidden"
              />
              <Image
                src="/github-white.png"
                alt="GitHub"
                width={24}
                height={24}
                className="hidden dark:block"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
