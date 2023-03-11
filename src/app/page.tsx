import { Inter } from "next/font/google";
import { PromptGenerator } from "@/components/PromptGenerator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <section className="relative">
          {/* Illustration behind hero content */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
            aria-hidden="true"
          >
            <svg
              width="1360"
              height="578"
              viewBox="0 0 1360 578"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="illustration-01"
                >
                  <stop stopColor="#FFF" offset="0%" />
                  <stop stopColor="#EAEAEA" offset="77.402%" />
                  <stop stopColor="#DFDFDF" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="url(#illustration-01)" fillRule="evenodd">
                <circle cx="1232" cy="128" r="128" />
                <circle cx="155" cy="443" r="64" />
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-16 pb-4 md:pt-20 md:pb-2">
              {/* Section header */}
              <div className="text-center pb-2 md:pb-4">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                  Midjourney{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    Photography
                  </span>{" "}
                  Creator
                </h1>
                <div className="max-w-3xl mx-auto">
                  <p className="text-xl text-gray-600 mb-4">
                    Midjourney Photography Assistant 是一个生成 Midjourney
                    prompt 的工具，帮助你创作出照片级质感的作品。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PromptGenerator />
      </main>
    </div>
  );
}
