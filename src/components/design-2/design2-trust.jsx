import { ArrowRight } from "lucide-react";

const data = [
  {
    title: "Easy to adopt",
    desc: "A clean, intuitive platform designed for both crypto-native teams and everyday users. Advanced AI capabilities + human experts ensure smooth onboarding and instant value.",
    img: "/trust-card1.svg",
  },
  {
    title: "Seamless integrations",
    desc: "Connect LegalSifter with the tools you already use - wallets, dev platforms, contract repositories, cloud storage, CRMs and Web3 apps. Your workflow stays the same. Your security gets better.",
    img: "/trust-card2.svg",
  },
  {
    title: "Powerful AI",
    desc: "Review, draft and analyze contracts using AI trained on crypto, Web3, and traditional legal data. From redlining to risk detection - everything is automated and insanely fast.",
    img: "/trust-card3.svg",
  },
];

const Design2Trust = () => {
  return (
    <section className="bg-[url('/trust.gif')] bg-no-repeat w-full bg-cover bg-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[58.2px] font-bold">
        Why people{" "}
        <span className="italic text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal">
          trust LegalSifter
        </span>
      </h1>

      <div className="max-w-7xl mx-auto w-full pt-8 sm:pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <div key={index} className="rounded-b-2xl">
              <img
                src={item.img}
                className="w-full h-auto object-cover"
                alt=""
              />
              <div className="p-4 sm:p-5 space-y-3 rounded-b-2xl border-l border-r border-b border-[rgba(70,110,190,0.55)] bg-[radial-gradient(140%_120%_at_50%_140%,rgba(70,110,190,0.55),rgba(10,14,26,0.95)),linear-gradient(180deg,#0a1020_0%,#0b1222_100%)]">
                <h1 className="text-xl sm:text-2xl lg:text-[24.5px] font-normal">
                  {item.title}
                </h1>
                <p className="text-xs sm:text-sm lg:text-[13px] font-normal">
                  {item.desc}
                </p>
                <button
                  className="backdrop-blur-2xl
    shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff]
    bg-white
    px-5 sm:px-6 lg:px-7 py-[7px]
    rounded-xl
    font-normal
    text-sm sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em]
    text-black cursor-pointer flex items-center justify-center gap-2 border-2 border-white mt-5 sm:mt-6 lg:mt-7 w-full hover:bg-gray-100 transition-colors"
                >
                  LEARN MORE <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design2Trust;
