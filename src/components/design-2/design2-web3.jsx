import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const data = [
  {
    title: "Close deals faster with AI that understands crypto",
    desc: "Accelerate sales and partnership cycles with workflows tailored for Web3 teams, exchanges and service providers. Our AI reviews and validates on-chain and off-chain agreements so you can move faster without sacrificing security.",
    manages: [
      "token sale agreements",
      "SAFTs",
      "partnership contracts",
      "licensing terms",
      "API/SDK agreements.",
    ],
    img: "/team1.png",
  },
  {
    title: "Optimize spending with smarter, safer contract review",
    desc: "Reduce risk and cost with AI-powered analysis for vendor agreements, audits and security-related contracts. LegalSifter helps you verify compliance, evaluate obligations, and track performance - automatically.",
    manages: [
      "supplier agreements",
      "security audits",
      "software licensing",
      "compliance contracts",
    ],
    img: "/team2.svg",
  },
  {
    title: "Strengthen operations with automated contract intelligence",
    desc: "From internal policies to contributor agreements, LegalSifter helps teams maintain transparency and enforce rules across decentralized and corporate environments.",
    manages: [
      "contributor agreements",
      "employment docs",
      "bounty program rules",
      "operational policies",
      "NDAs.",
    ],
    img: "/team3.svg",
  },
];

const Design2Web3 = () => {
  const [step, setStep] = useState(0);

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full pt-12 sm:pt-16 lg:pt-20">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56.1px] font-bold">
            Built for every on-chain agreement
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[55.9px] font-normal italic">
            across Web3 and beyond
          </p>
        </div>

        <div className="space-y-6 mt-8">
          <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center lg:justify-start">
            <button
              onClick={() => setStep(0)}
              className={`backdrop-blur-2xl shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff] px-5 sm:px-6 lg:px-7 py-[7px] rounded-full
    font-normal leading-[150%] tracking-[-0.02em]
     cursor-pointer text-sm sm:text-base ${
       step === 0 ? "bg-white text-black" : "text-white bg-[rgba(9,15,34,0.8)]"
     }`}
            >
              Selling
            </button>
            <button
              onClick={() => setStep(1)}
              className={`backdrop-blur-2xl shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff] px-5 sm:px-6 lg:px-7 py-[7px] rounded-full
    font-normal leading-[150%] tracking-[-0.02em]
     cursor-pointer text-sm sm:text-base ${
       step === 1 ? "bg-white text-black" : "text-white bg-[rgba(9,15,34,0.8)]"
     }`}
            >
              Purchasing
            </button>
            <button
              onClick={() => setStep(2)}
              className={`backdrop-blur-2xl shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff] px-5 sm:px-6 lg:px-7 py-[7px] rounded-full
    font-normal leading-[150%] tracking-[-0.02em]
     cursor-pointer text-sm sm:text-base ${
       step === 2 ? "bg-white text-black" : "text-white bg-[rgba(9,15,34,0.8)]"
     }`}
            >
              Operations
            </button>
          </div>

          <div className="rounded-3xl px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-3 bg-[radial-gradient(140%_120%_at_50%_140%,rgba(70,110,190,0.55),rgba(10,14,26,0.95)),linear-gradient(180deg,#0a1020_0%,#0b1222_100%)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-4">
              <div className="space-y-4 order-2 lg:order-1">
                <h1 className="text-2xl sm:text-3xl lg:text-[35px] font-normal">
                  {data[step].title}
                </h1>
                <p className="text-sm sm:text-base lg:text-[15px] font-normal leading-6 sm:leading-7 lg:leading-8">
                  {data[step].desc}
                </p>

                <div className="space-y-2">
                  <p className="text-sm sm:text-base lg:text-[15px] font-normal">
                    Manages:
                  </p>
                  <ul className="list-disc ml-5 space-y-2 text-sm sm:text-base lg:text-[15px] font-normal">
                    {data[step].manages.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="backdrop-blur-2xl
    shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff]
    bg-white
    px-5 sm:px-6 lg:px-7 py-[7px]
    rounded-xl
    font-normal
    text-sm sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em]
    text-black cursor-pointer flex items-center justify-center gap-2 border-2 border-white mt-7 w-full sm:w-auto"
                >
                  LEARN MORE <ArrowRight size={17} />
                </button>

                <div className="flex items-center gap-2">
                  <div className="border-2 border-white rounded-full p-2 sm:p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <ArrowLeft size={16} className="sm:w-[17px] sm:h-[17px]" />
                  </div>
                  <div className="border-2 border-white rounded-full p-2 sm:p-3 cursor-pointer hover:bg-white/10 transition-colors">
                    <ArrowRight size={16} className="sm:w-[17px] sm:h-[17px]" />
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={data[step].img}
                  alt=""
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design2Web3;
