/* eslint-disable react/no-unescaped-entities */

import "./App.css";
import leaf from "./assets/img/leaf2.webp";
import sun from "./assets/img/sunflower.webp";
import flower from "./assets/img/flower2.webp";
import Scene from "./components/Scene";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import 'lenis/dist/lenis.css'
import ReactLenis from "lenis/react";

// array of positions of the bee in each section
const arrPositionModel = [
  {
    section: "section0",
    coordinates: {
      position: { x: 1, y: -5, z: -2 },
      rotation: { x: 0.5, y: -0.5, z: 0 },
    },
  },
  {
    section: "section1",
    coordinates: {
      position: { x: -8, y: -8, z: 2 },
      rotation: { x: 0.5, y: -0.5, z: 0 },
    },
  },

  {
    section: "section2",
    coordinates: {
      position: { x: -16, y: -4, z: -5 },
      rotation: { x: 0.5, y: -0.5, z: 0 },
    },
  },
  {
    section: "section3",
    coordinates: {
      position: { x: 20, y: -7, z: 0 },
      rotation: { x: -0.2, y: 0.5, z: 0 },
    },
  },
  {
    section: "section4",
    coordinates: {
      position: { x: 3, y: -8, z: 8 },
      rotation: { x: 0, y: 0.5, z: 0 },
    },
  },
  {
    section: "section5",
    coordinates: {
      position: { x: -10, y: -8, z: 0 },
      rotation: { x: 0.3, y: -0.5, z: 0 },
    },
  },
  {
    section: "section6",
    coordinates: {
      position: { x: 0, y: -7, z: 3 },
      rotation: { x: 0, y: 0.5, z: 0 },
    },
  },
];

// Extract arrays for each coordinate
const inputRange = arrPositionModel.map(
  (_, i) => i / (arrPositionModel.length - 1)
);
const xPos = arrPositionModel.map((item) => item.coordinates.position.x);
const yPos = arrPositionModel.map((item) => item.coordinates.position.y);
const zPos = arrPositionModel.map((item) => item.coordinates.position.z);

const xRot = arrPositionModel.map((item) => item.coordinates.rotation.x);
const yRot = arrPositionModel.map((item) => item.coordinates.rotation.y);
const zRot = arrPositionModel.map((item) => item.coordinates.rotation.z);
function App() {
  const bodyRef = useRef(null);
  const modelRef = useRef(null);
  const [position, setPosition] = useState(arrPositionModel[0].coordinates);
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, inputRange, xPos);
  const y = useTransform(scrollYProgress, inputRange, yPos);
  const z = useTransform(scrollYProgress, inputRange, zPos);

  const rotX = useTransform(scrollYProgress, inputRange, xRot);
  const rotY = useTransform(scrollYProgress, inputRange, yRot);
  const rotZ = useTransform(scrollYProgress, inputRange, zRot);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalSections = arrPositionModel.length;
    const index = Math.floor(latest * totalSections);
    const clampedIndex = Math.min(index, totalSections - 1);
    setPosition({
      position: {
        x: x.get(),
        y: y.get(),
        z: z.get(),
      },
      rotation: {
        x: rotX.get(),
        y: rotY.get(),
        z: rotZ.get(),
      },
    });
    console.log("Changed to section:", arrPositionModel[clampedIndex].section);
  });

  return (
    <ReactLenis root>
    <body>
      <motion.div ref={bodyRef} className="">
        <header>
          <div className="flex items-center container justify-between mx-auto relative py-5 max-h-10">
            <div className="">Beehive</div>
            <nav>
              <ul className="flex items-center gap-[2em]">
                <li>Contacts</li>
                <li>Category</li>
                <li>Login</li>
              </ul>
            </nav>
          </div>
        </header>
        <div
          className="w-full min-h-screen section relative flex justify-center items-center"
          id="section1"
        >
          <div className="w-full">
            <div
              className="text-[#d1ff48] font w-full text-[24vw] font-poppins font-bold text-center relative "
              data-before="WEBSITEDESIGN"
            >
              Bee Hive
            </div>
          </div>
        </div>

        <div className="section" id="section2">
          <div className="flex justify-between items-center ">
            <div className="basis-3/4">
              <img src={sun} className="w-full h-full " />
            </div>

            <div className="basis-1/4 self-start pt-16 mr-10">
              <div className="text-[#d1ff48] text-4xl font font-bold font-poppins">
                Fun facts about Bees
              </div>
              <p className="text-white font-medium text-lg font-poppins ">
                Did you know that?
              </p>
              <p className="text-[#F3FEB8] font-semibold text-xl font-poppins ">
                Bees communicate through dance: Honeybees perform a &quot;waggle
                dance&quot; to tell other bees where to find food. The dance
                conveys direction and distance to nectar sources.
              </p>
            </div>
          </div>
        </div>
        <div className="section" id="section3">
          <div className="flex px-10 items-center justify-between w-full">
            <div className="number text-[#d1ff48] ">01</div>

            <div className="w-[600px] mr-[18%]">
              <p className=" text-[#F3FEB8] font-semibold text-6xl font-poppins ">
                Only female bees sting, Male bees, called drones, don't have
                stingers. Only female bees (the workers and the queen) can
                sting, and they usually only do it in defense.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-transparent section " id="section4">
          <div className="h-full w-full inset-0 absolute bg-cover bg-[url('/src/assets/img/greenbg.webp')] z-0" />

          <div className="absolute -bottom-[40%] right-0 h-full z-10">
            <img src={leaf} className="w-full h-full" />
          </div>

          <div className="relative px-10 pb-5 z-20">
            <div className="number text-[#d1ff48]">02</div>

            <div className="max-w-[500px] flex flex-col gap-y-5 -mt-24">
              <p className="w-full text-[#d1ff48] font-semibold text-4xl font-poppins">
                Bees beat their wings 200 times per second, that rapid wing
                movement is what creates the familiar "buzz" of bees.
              </p>

              <p className="w-full text-[#d1ff48] font-medium text-2xl font-poppins">
                Bees can fly up to 15 miles per hour. While they aren’t the
                fastest fliers, their efficiency and ability to navigate long
                distances are impressive.
              </p>
            </div>
          </div>
        </div>

        <div className="section" id="section5">
          <div className="flex justify-between items-center relative">
            <div className="basis-2/3 -ml-[28%]">
              <img src={flower} className="w-full h-full rotate-3" />
            </div>

            <div className="basis-1/3 self-center mr-16">
              <p className="text-[#F3FEB8] font-bold text-5xl font-poppins ">
                About 75% of the world's flowering plants rely on animal
                pollinators, like bees, for reproduction. This includes about
                35% of global food crops.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-10" id={"section6"}>
          <div className="flex flex-col gap-y-5 ">
            <p className="font text-5xl font-boldtext-[#F3FEB8]">
              Nelson Ndukwe
            </p>
            <p className="text-2xl font-semibold text-[#F3FEB8]">
              Nelsonndukwe800@gmail.com
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold text-[#F3FEB8]">X</p>
            <p className="text-2xl font-semibold text-[#F3FEB8]">Linkdln</p>
            <p className="text-2xl font-semibold text-[#F3FEB8]">Facebook</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold text-[#F3FEB8]">Instagram</p>
            <p className="text-2xl font-semibold text-[#F3FEB8]">Github</p>
          </div>
        </div>

        <div className="fixed pointer-events-none inset-0 z-50 ">
          <Scene ref={modelRef} state={position} />
        </div>
      </motion.div>
    </body>
    </ReactLenis>
  );
}

export default App;
