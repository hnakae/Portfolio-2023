import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import goal from "../../public/assets/goal(2).png";
import nagi from "../../public/assets/nagi (2).png";
import isagi from "../../public/assets/isagi.png";
import isagi2 from "../../public/assets/isagi2.png";
import bachira from "../../public/assets/bachira.png";
import bachira2 from "../../public/assets/bachira2.png";

import penguin from "../../public/assets/penguin.jpg";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
// import go from "../../public/assets/go.png";
// import code from "../../public/assets/programming.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(2) <= value) {
        ref.current.textContent = latest.toFixed(2);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Hironobu | About Page</title>
        <meta name="description" content="Hironobu Nakae's Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-full flex-col justify-center text-dark dark:text-light ">
        <Layout className="pt-0">
          <AnimatedText
            text="Unleashing Creativity!"
            className="mb-16 lg:!text-7xl sm:!text-6xl md:!text-4xl sm:mb-8 "
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              {/* <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                <Image src={code} className="w-10" />
                Hi, I'm Hiro, a full-stack developer based in Eugene with a
                passion for building digital experiences on the web.
              </p>
              <p className="my-4 font-medium">
                <Image src={go} className="w-10" />
                I'm also a huge fan of baduk (go), a game that has been a part
                of my life for over a decade now.
              </p>
              <p className="my-4 font-medium">Content Curator</p> */}
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Quotes
              </h2>
              <p className="font-medium">
                Let's have fun! Otherwise, we'll lose. That's how it is. -
                Bachira
              </p>

              <p className="my-4 font-medium">
                From Zero to One: If someone scores a goal, we can build the
                team structure around it. This is how a team is born. Using that
                as a guiding principle, a team can evolve into a '10' or even a
                '100.' - Isagi
              </p>
              <p className="my-4 font-medium">
                Scoring a goal means destroying the other team's structure. The
                act of scoring is a revolution on the field, where you wreck the
                other team's order. Don't be trapped by roles! - Jinpachi Ego
              </p>
              <p className="my-4 font-medium">iikuzo, omae RA!</p>
              <p className="my-4 font-medium">
                Pull them in and Counter Attack
              </p>
              <p className="my-4 font-medium">
                When ahead, pass the ball around and let the time run out.
              </p>
              <p className="my-4 font-medium">Your press was not in vaine.</p>
              <div className="col-span-3 relative h-max rounded-3xl rounded-br-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl " />
                <Image
                  src={bachira2}
                  alt="Hironobu"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="my-4 font-medium">
                Who is the heart of their team? If we can shut him out, Team Y
                dies. So now's our chance!
              </p>
              <p className="my-4 font-medium">
                Someone once said: "In the world of soccer, you can train
                first-rate goalkeepers, defenders, and midfielders, but strikers
                are different. A first-rate striker will find where the soccer
                is most intense... and suddenly appear there."
              </p>
              <p className="my-4 font-medium">
                Find your one-of-a-kind play and make it stand out. Your talent
                is a fierce gemstone that turns into worthless complacency if
                you don't polish it.
              </p>
              <p className="my-4 font-medium">
                Situational awareness allows you to smell the play but you have
                to be able to react without hesitation. So train your stamina to
                last until that moment comes and then do what i need to when the
                time comes.
              </p>
              <p className="my-4 font-medium">
                The world's best striker must be able to reproduce their goals.
                What you need right now is the formula to create scoring
                opportunities. Analyze how, when, and under what circumstances
                your weapon helped you to score a goal. How far away was the
                goal? How many defenders were there? Where did you receive the
                pass? What did you feel in that moment? Internalize every
                detail, then reproduce it. Your positioning, your touch, your
                dribbling, your shooting. Devise a formula that will make you
                shine the most. World-famous strikers have their own formulas
                for scoring. Understand that you can only evolve once you've
                nailed reproducibility! In a match, you can expect only
                irregularities to happen. Someone who can prove their own
                formula on such a battlefield can become the world's best
                striker, who will crank out goals, one after another. Don't rely
                on chance to win. Win the game because you're meant to!
              </p>
              <p className="my-4 font-medium">
                Formula = Specialty x Condition = Mass Production of Goals
              </p>
              <div className="col-span-3 relative h-max rounded-3xl rounded-br-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl " />
                <Image
                  src={isagi}
                  alt="Hironobu"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="my-4 font-medium">
                When people are feeling hopeless, be the one to be hyped up!
                Don't tell me you're scared. If your maximum isn't enough, then
                if we manage to score against them, it'll be when we've
                surpassed our limits, right? "Hey, it worked! Wow, there's no
                end to my inspiration!"
              </p>
              <p className="my-4 font-medium">
                "We should be excited, not scared, when we're in a desperate
                situation."
              </p>
              <div className="col-span-3 relative h-max rounded-3xl rounded-br-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl " />
                <Image
                  src={bachira}
                  alt="Hironobu"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="col-span-3 relative h-max rounded-3xl rounded-br-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl " />
                <Image
                  src={bachira2}
                  alt="Hironobu"
                  className="w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="my-4 font-medium">
                "Bachira, you're amazing. you look so happy to be playing
                soccer."
              </p>
              <p className="my-4 font-medium">Evolve your ego.</p>
              <p className="my-4 font-medium">Find a second Formula.</p>
              <p className="my-4 font-medium">
                Attempt the next level, and break through.
              </p>
              <p className="my-4 font-medium">
                Lots of wasted movement/time = inefficient. Cut out the waste!
              </p>
              <p className="my-4 font-medium">
                Awakening is the moment when you learn who you really are.
              </p>

              <p className="my-4 font-medium">
                Go against his center of gravity. Check reaction speed.
              </p>
              <p className="my-4 font-medium">
                But now that I have it, the rest is inevitable. This curiosity
                of mine can't be stopped. With soccer, I want to challenge
                myself! (ore wo tameshitai)
              </p>
              <p className="my-4 font-medium">
                If you can't read your opponent, read the field of play. Erase
                the weak point in your teams play. Don't let the heart of their
                team block your teams path to victory.
              </p>
              <p className="my-4 font-medium">
                Purpose: To strengthen body and mind through soccer, and learn
                teamwork and etiquette. Win National Championship!
              </p>
              <p className="my-4 font-medium">
                Buy time for your teammates to get into position.
              </p>
              <p className="my-4 font-medium">
                Outside the box instant solution
              </p>
              <p className="my-4 font-medium">
                Which? No, this is Blue Lock! If he's an egoist, he'll take on
                the shot himself!
              </p>
              <p className="my-4 font-medium">
                Beware your blind spot and the opponent's blind spot. Emulation.
                Off the ball. Track their eyes.
              </p>
              <p className="my-4 font-medium">
                Create a 2nd Formula: for winning one vs one battles. For nagi,
                it's the one touch giving life to the ball, or absorbing
                takedown to kill the ball dead. By fully utilizing these two
                takedowns, Nagi Seishiro's formula is complete! Max-Range + CC =
                3x Damage Single Target. AOE + Flash = AOE Dark Harvest So Nagi
                has his two formulas so chemical reaction is use his catch for a
                counter attack, use situational awareness to get in position +
                use the opponents blind spot to induce a response, then go the
                opposite direction against their center of gravity To create a
                window where you have one turn. Use this turn to move in and
                take the direct shot.
              </p>
              <p className="my-4 font-medium">
                Update my vision and lead the team. The images of potential
                goals are endless! Sense your teams off-the-ball movements. This
                will be the key to chemical reaction
              </p>
              <p className="my-4 font-medium">
                If you can't change the teammates playstyle, don't think about
                making the most of his play. Devour his play, and dominate the
                field! (Use his play as bait)
              </p>
              <p className="my-4 font-medium">
                Feint a movement towards a bait to pass to the decoy. When all
                eyes are on the decoy, emerge from their blind spot and shoot.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-3xl rounded-br-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl " />
              <Image
                src={goal}
                alt="Hironobu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-3 relative h-max rounded-3xl rounded-br-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl " />
              <Image
                src={nagi}
                alt="Hironobu"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={57} />%
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Win Percentage
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3.83} />
                  :1
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  KDA
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={292} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Games Played
                </h2>
              </div>
            </div>
          </div>
          {/* <Skills /> */}
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
