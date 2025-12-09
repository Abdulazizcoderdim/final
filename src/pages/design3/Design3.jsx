import Home from "./component/Home";
import Legal from "./component/Legal";
import Operation from "./component/Operation";
import Partner from "./component/Partner";
import TrustedBy from "./component/Trustedby";
import JoinCommunity from "../../sections/Perspectives/JoinCommunity";

const Design3 = () => {
  return (
    <main>
      <div className="h-20"></div>

      <Home />
      <TrustedBy />
      <Legal />
      <Operation />
      <Partner
        title={"Trusted by"}
        span={"industry leaders"}
        desc={
          "LegalSifter is recognized for delivering practical, human-centered AI that brings clarity, speed, and real results to modern legal teams."
        }
      />
      <JoinCommunity />
    </main>
  );
};

export default Design3;
