import { ArrowRight } from "lucide-react";

const data = [
  {
    img: "/team.svg",
    title: "Millions of on-chain and off-chain contracts analyzed",
    desc: "LegalSifter reviews smart contracts, token agreements, partnership deals, user terms and compliance docs, all with AI built specifically for Web3 and fintech. Companies, developers and everyday users all get the same level of precision and protection.",
    btnText: "SEE REAL USE CASES",
  },
  {
    img: "/team.svg",
    title: "Instant insights. Clear redlines. Actionable recommendations.",
    desc: "Our AI processes and review workflows allow anyone to understand risk in seconds - no lawyer, no delays. You immediately see hidden risks, dangerous clauses, scam patterns and technical vulnerabilities.",
    btnText: "LEARN HOW IT WORKS",
  },
  {
    img: "/team.svg",
    title: "A growing network of traders, founders, builders and legal experts",
    desc: "LegalSifter connects people who work with contracts every day: from retail users to large Web3 organizations. A community sharing insights, solutions and security best practices.",
    btnText: "JOIN OUR COMMUNITY",
  },
];

const Design2Team = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full pt-12 sm:pt-16 lg:pt-20">
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56.1px] font-bold">
            Why leading teams
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[55.9px] font-normal italic">
            rely on LegalSifter
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-10 mt-8 sm:mt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5 items-center"
            >
              <img
                src={item.img}
                className="w-full h-auto object-cover rounded-lg"
                alt=""
              />
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal">
                  {item.title}
                </h1>
                <p className="text-base tracking-wider sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-200">
                  {item.desc}
                </p>
                <button
                  className="backdrop-blur-2xl
    shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff]
    bg-[rgba(9,15,34,0.8)]
    px-5 sm:px-6 lg:px-7 py-2 sm:py-[7px]
    rounded-xl
    font-normal
    text-sm sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em]
    text-white
    flex items-center justify-center gap-[5px] uppercase hover:bg-[rgba(9,15,34,0.9)] transition-all duration-300 w-full sm:w-auto"
                >
                  {item.btnText} <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design2Team;
