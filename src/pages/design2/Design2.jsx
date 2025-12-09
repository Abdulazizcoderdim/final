import Design2Howteam from "../../components/design-2/design2-howteam";
import Design2integrate from "../../components/design-2/design2-integrate";
import Design2Our from "../../components/design-2/design2-our";
import Design2Team from "../../components/design-2/design2-team";
import Design2Trust from "../../components/design-2/design2-trust";
import Design2Web3 from "../../components/design-2/design2-web3";
import HeroDesign2 from "../../components/design-2/hero-design2";
import JoinCommunity from "../../sections/Perspectives/JoinCommunity";
import Partner from "../design3/component/Partner";

const Design2 = () => {
  return (
    <main>
      <div className="max-md:h-20 h-16"></div>

      <HeroDesign2 />
      <Design2integrate />
      <Design2Team />
      <Design2Web3 />
      <Partner
        title={"Backed by"}
        span={"security & legal experts worldwide"}
        desc={
          "Ironclad is proud to be recognized by industry analysts for intuitive, AI contract management that drives results across the enterprise."
        }
      />

      <Design2Trust />
      <Design2Howteam />
      <Design2Our />

      <JoinCommunity />
    </main>
  );
};

export default Design2;
