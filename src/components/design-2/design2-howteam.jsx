import { ArrowRight } from "lucide-react";

const Design2Howteam = () => {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 pt-12 sm:pt-14 lg:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-10 bg-[url('/how-team.svg')] min-h-[400px] sm:min-h-[550px] lg:min-h-[719px] bg-no-repeat bg-cover bg-center flex items-end">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56.6px] font-medium">
            How teams cut workload <br className="hidden sm:block" /> by 75%
          </h1>
          <p className="text-base sm:text-lg lg:text-[20.6px] font-normal max-w-3xl">
            See how Web3 projects, exchanges and startups replaced manual review
            with automated workflows - reducing mistakes, improving security,
            and accelerating operations.
          </p>
          <button
            className="backdrop-blur-2xl
    shadow-[6px_6px_6px_rgba(0,0,0,0.3),inset_-2px_-5px_20px_#90adff]
    bg-white
    px-5 sm:px-6 lg:px-7 py-[7px]
    rounded-xl
    font-normal
    text-sm sm:text-[15px] lg:text-[16px] leading-[150%] tracking-[-0.02em]
    text-black cursor-pointer flex items-center justify-center gap-2 border-2 border-white mt-5 sm:mt-6 lg:mt-7 w-full sm:w-auto hover:bg-gray-100 transition-colors"
          >
            READ THE STORY <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Design2Howteam;
