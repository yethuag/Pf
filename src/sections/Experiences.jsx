import ParallaxBackground from "../components/ParallaxBackground";
import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full">
      <ParallaxBackground />
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
