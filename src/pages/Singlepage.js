import React from "react";
import { useGSAP } from "@gsap/react";
import profile from "../assets/profile.png";
import Image from "next/image";
import { useState } from "react";
// import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SkillsSection from "./Components/Skills";
import ResumeSection from "./Components/Resume";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink, Element } from "react-scroll";
const Singlepage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();
    tl.from(".profilepicturecontainer", {
      scale: 1.1,
      y: 110,
      duration: 0.8,
      delay: 0.8,
      ease: "power2.out",
    });
    gsap.from(
      ".navbar",
      {
        x: 400,
        opacity: 0,
        y: 100,
        scale: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.1"
    );
    tl.from(
      ".aboutpara",
      {
        x: 900,
        opacity: 0,
        scale: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.1"
    );
    tl.from(
      ".aboutus",
      {
        x: 700,
        y: -300,
        opacity: 0,
        scale: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3.999"
    );
    tl.from(
      ".aboutus2",
      {
        x: 700,
        y: -300,
        opacity: 0,
        scale: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.399"
    );
    tl.from(
      ".contactme",
      {
        y: -500,
        opacity: 0,
        scale: 0.1,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.5"
    );
    tl.from(
      ".contactme2",
      {
        y: -500,
        opacity: 0,
        scale: 0.1,
        duration: 0.7,
        ease: "power2.out",
      },
      "-=0.9"
    );
    tl.from(
      ".skills",
      {
        x: -200,
        opacity: 0,
        scale: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.5"
    );
    tl.from(
      ".skills2",
      {
        x: -200,
        opacity: 0,
        scale: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.9"
    );
    tl.from(
      ".resume",
      {
        y: -500,
        x: -200,
        opacity: 0,
        scale: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.9"
    );

    //     gsap.from('#q1',{
    //          scrollTrigger: {
    //          trigger: "#q1",
    //          scroller: "body",
    //         //  markers: true,
    //          start: "top 75%",
    //        },
    //        x:300,
    //        opacity:0,
    //     })
    //     gsap.from('#q2',{
    //       scrollTrigger: {
    //       trigger: "#q2",
    //       scroller: "body",
    //       // markers: true,
    //       start: "top 72%",
    //     },
    //     x:-300,
    //     opacity:0,
    //  })
    //  gsap.from('#q3',{
    //   scrollTrigger: {
    //   trigger: "#q3",
    //   scroller: "body",
    //   // markers: true,
    //   start: "top 68%",
    // },
    // x:300,
    // opacity:0,
    // })
    // gsap.from('#q4',{
    //   scrollTrigger: {
    //   trigger: "#q4",
    //   scroller: "body",
    //   // markers: true,
    //   start: "top 64%",
    // },
    // x:-300,
    // opacity:0,
    // })
    // gsap.from('#q5',{
    //   scrollTrigger: {
    //   trigger: "#q5",
    //   scroller: "body",
    //   // markers: true,
    //   start: "top 52%",
    // },
    // x:300,
    // opacity:0,
    // })
    // gsap.from('#q6',{
    //   scrollTrigger: {
    //   trigger: "#q6",
    //   scroller: "body",
    //   // markers: true,
    //   start: "top 54%",
    // },
    // x:-300,
    // opacity:0,
    // })
    // gsap.from('#q7',{
    //   scrollTrigger: {
    //   trigger: "#q7",
    //   scroller: "body",
    //   // markers: true,
    //   start: "top 66%",
    // },
    // x:300,
    // opacity:0,
    // })
    // gsap.from('#q8',{
    //   scrollTrigger: {
    //   trigger: "#q8",
    //   scroller: "body",
    //   markers: true,
    //   start: "top 70%",
    // },
    // x:-300,
    // opacity:0,
    // })

    const triggerElements = document.querySelectorAll(".bgtext li");
    const triggerElements2 = document.querySelectorAll(".projects li");
    triggerElements.forEach((el) => {
      gsap.from(el, {
        x: 300,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          scroller: "body",
          // markers: true,
          start: "top 70%",
          onEnter: () => gsap.to(el, { x: 0, opacity: 1 }),
          onLeaveBack: () => gsap.to(el, { x: -300, opacity: 0 }),
        },
      });
    });
    triggerElements2.forEach((el) => {
      gsap.from(el, {
        x: 300,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          scroller: "body",
          // markers: true,
          start: "top 55%",
          onEnter: () => gsap.to(el, { x: 0, opacity: 1 }),
          onLeaveBack: () => gsap.to(el, { x: -300, opacity: 0 }),
        },
      });
    });

    ScrollTrigger.batch(".projects li", {
      onEnter: (batch) => {
        batch.forEach((el) => gsap.to(el, { x: 0, opacity: 1 }));
      },
      onLeaveBack: (batch) => {
        batch.forEach((el) => gsap.to(el, { x: -600, opacity: 0 }));
      },
    });

    gsap.fromTo(
      ".goalspan",
      { x: -600, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".goalspan",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    ScrollTrigger.batch(".bgtext li", {
      onEnter: (batch) => {
        batch.forEach((el) => gsap.to(el, { x: 0, opacity: 1 }));
      },
      onLeaveBack: (batch) => {
        batch.forEach((el) => gsap.to(el, { x: -300, opacity: 0 }));
      },
    });
  });
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    if (message.trim() === "") return;
    alert(`Message sent: ${message}`);
    setMessage("");
  };

  return (
    <div className="container  max-w-[100vw] p-5 overflow-hidden bg-[#edc090b5]">
      <div className="row">
        <div className="navbar bg-[#b88351] max-w-full  sm:ml-3.5 rounded-[13px] p-3 sm:p-4 flex justify-center items-center">
          <nav className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <ul className="left flex gap-4 sm:gap-[50px] font-[800] font-[Norican] italic">
              <li className="text-base sm:text-[20px] font-medium">
                Portfolio
              </li>
            </ul>
            <ul className="right flex justify-center sm:justify-end gap-4 sm:gap-[50px] m-0 p-0">
              <li className="text-black font-bold text-sm hidden sm:block">
                <ScrollLink
                  to="resume"
                  smooth={true}
                  duration={400}
                  offset={-50}
                  className="cursor-pointer"
                >
                  Resume
                </ScrollLink>
              </li>
              <li className="text-black font-bold text-sm hidden sm:block">
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={400}
                  offset={-50}
                  className="cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>
              <li className="text-black font-bold text-sm hidden sm:block">
                <ScrollLink
                  to="goals"
                  smooth={true}
                  duration={400}
                  offset={-50}
                  className="cursor-pointer"
                >
                  Goals
                </ScrollLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="cards flex flex-col lg:flex-row justify-center">
          <div className="card1 w-full lg:w-auto">
            <div className="aboutpara w-full lg:max-w-[50vw] lg:w-[45vw] mx-2 sm:ml-3.5 mt-4 pt-16 sm:pt-[8rem] rounded-[13px] relative bg-[#b88351]">
              <div className="iconcode absolute top-2 right-2 sm:top-[10px] sm:right-[10px] sm:ml-[80%]">
                <FontAwesomeIcon
                  icon={faCode}
                  size="2x"
                  className="sm:text-5xl"
                />
              </div>
              <div className="aboutheading">
                <h2 className="mt-12 custom2-text  font-serif sm:mt-[90px] px-4 sm:pl-[20px] font-[PT Serif] text-xl sm:text-[2em] leading-tight">
                  Code is like humor. <br /> When you have to{" "}
                  <span className="font-serif">Explain</span> it, it's bad
                </h2>
              </div>
            </div>

            <div className="aboutus mt-3 mx-2 sm:ml-3.5 bg-[#b88351] pb-2 sm:pb-[0.3em] rounded-[13px] pr-4 sm:pr-[1em] flex justify-center w-full lg:w-[40vw]  lg:max-w-[46vw]">
              <div className="para">
                <h3 className="m-4 font-sans custom-text text-sm sm:text-base lg:text-[1em] leading-relaxed">
                  As a passionate full-stack developer, I specialize in building
                  high-performance, cross-platform applications using modern
                  technologies.
                  <br className="hidden sm:block" /> My expertise spans
                  JavaScript, React.js, Next.js, and Tailwind CSS for frontend
                  development, paired with Express.js and Django REST Framework
                  for powerful backend systems.
                  <br className="hidden sm:block" /> I also leverage React
                  Native for seamless mobile experiences.
                  <br className="hidden sm:block" />
                  With a growing focus on supervised machine learning, I
                  integrate intelligent features that enhance application
                  functionality.
                  <br className="hidden sm:block" /> Combined with my knowledge
                  of marketing, I craft solutions that are not only technically
                  robust but also strategically impactful—delivering elegant,
                  user-focused experiences.
                </h3>
              </div>
            </div>
          </div>

          <div className="card2 w-full lg:w-auto">
            <div className="profilepicturecontainer custom2-profile custom-profile md:h-[21em] bg-[#edc090] px-6 h-[21em] lg:py-[11em] sm:px-10 flex items-center  sm:h-[21em] justify-center rounded-xl mt-3 mx-2 lg:ml-4">
              <Image
                id="image"
                className="mix-blend-multiply object-cover w-32 sm:w-48 lg:w-[200px]"
                width={200}
                src={profile}
                alt="profileshow"
              />
            </div>

            <div className="contactme bg-[#edc090] custom2-contact custom-contact lg:mt-2 mx-2 lg:transform lg:-translate-x-12 rounded-xl mt-3 p-3 lg:py-[1.5em] sm:p-6 lg:min-w-fit">
              <span className="name2 font-serif text-base sm:text-[1.1em] font-semibold block mb-3 lg:whitespace-nowrap">
                Muhamad Ali <br />
                Athar{" "}
              </span>
              <ul className="space-y-1 mb-3">
                <li className="gap-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-base sm:text-xl flex-shrink-0"
                  />
                  <span className="text-sm font-sans sm:text-[1.5em] lg:whitespace-nowrap">
                    ali._.athar
                  </span>
                </li>
                <li className="gap-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-base sm:text-xl flex-shrink-0"
                  />
                  <span className="text-sm font-sans sm:text-[1.5em] lg:whitespace-nowrap">
                    Muhammad Ali Athar
                  </span>
                </li>
                <li className="gap-2 flex items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-base sm:text-xl flex-shrink-0"
                  />
                  <span className="text-sm font-sans sm:text-[1.5em] lg:whitespace-nowrap">
                    aliathae8@gmail.com
                  </span>
                </li>
              </ul>
              <h3 className="text-2xl sm:text-[2em] font-bold lg:whitespace-nowrap">
                Contact <span>Me</span>
              </h3>
            </div>
          </div>

          {/* <div className="card3 max-w-full lg:max-w-auto"> */}
          <div className="skills lg:ml-[1.5vw] px-[5em] pt-[3em] mt-4 rounded-xl bg-[#b88351]">
            <SkillsSection />
          </div>
          {/* </div> */}
        </div>

        <Element name="projects">
          <div className="projects m-4 sm:m-8 lg:m-[5rem]">
            <h1 className="font-bold text-2xl font-serif sm:text-3xl lg:text-[2.5em] mb-6">
              PROJECTS
            </h1>
            <ul className="space-y-4">
              <li className="bg-[#b88351] rounded-b-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-serif lg:text-[2em] font-bold mb-2">
                  Machine Learning
                </h3>
                <span className="text-sm font-sans sm:text-base leading-relaxed">
                  I have trained multiple models in supervised machine learning
                  using algorithms such as Linear Regression, Logistic
                  Regression, Ridge, Lasso, SVM, Decision Tree, Random Forest,
                  and AdaBoost. One of my key projects involved building a
                  predictive model using a cricket dataset — performing detailed
                  feature engineering, model selection, and hyperparameter
                  tuning to maximize performance.
                </span>
              </li>
              <li className="bg-[#b88351] rounded-b-lg p-4 sm:p-6">
                <h3 className="text-lg font-serif sm:text-xl lg:text-[2em] font-bold mb-2">
                  Web Application Sites
                </h3>
                <span className="text-sm sm:text-base font-sans leading-relaxed">
                  I’ve built and deployed several real-world projects including:
                  A real-time social media application with WebSocket
                  integration for instant messaging and live notifications,
                  <br /> An online e-commerce store with cart, authentication,
                  and payment integration,
                  <br /> A portfolio website (this one!) to showcase my skills
                  and projects,
                  <br /> A CV/resume generator tool allowing users to build and
                  export professional resumes,
                  <br /> A home-service booking platform for scheduling and
                  managing services like cleaning or plumbing,
                  <br /> A blog platform with markdown support and user
                  authentication.
                </span>
              </li>
              <li className="bg-[#b88351] rounded-b-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-serif lg:text-[2em] font-bold mb-2">
                  App Development
                </h3>
                <span className="text-sm sm:text-base font-sans leading-relaxed">
                  On the mobile side, I've used React Native to build a
                  full-featured e-commerce mobile app, including product
                  listings, a shopping cart, and order tracking — though I’ve
                  yet to dive deep into more complex native features. I also
                  enjoy exploring machine learning integrations that enhance
                  user experience, combining my technical expertise with a
                  marketing-aware mindset to build solutions that are not only
                  efficient but also user-centric and impactful.
                </span>
              </li>
            </ul>
          </div>
        </Element>

        <div className="contactmecontainer sm:mt-12 mt-[4em] lg:mt-[5rem] py-8 sm:py-[7rem] flex justify-center rounded-[13px] px-4 sm:px-8 lg:px-[6em] relative flex-col items-center">
          <div className="bgtext mt-3 w-full flex justify-center items-center px-2 sm:pl-4 rounded-[13px] relative">
            <ul className="absolute z-10 flex flex-col gap-2 sm:gap-3 w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <li className="q1 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                What can you do for me?
              </li>
              <li className="q2 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                Do I know you?
              </li>
              <li className="q3 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                What you actually do?
              </li>
              <li className="q4 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                Are you a good developer?
              </li>
              <li className="q5 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                What are your skills?
              </li>
              <li className="q6 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                Can you make me a website?
              </li>
              <li className="q7 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                Can you hack an insta account?
              </li>
              <li className="q8 text-xs sm:text-base font-sans lg:text-[1.5rem] font-medium px-2 sm:px-[0.5rem] py-1 sm:py-2 bg-[#f5f5dc] flex justify-center rounded-[35px] text-center">
                Can you make a game?
              </li>
            </ul>

            <h1 className="font-serif font-medium text-2xl sm:text-4xl lg:text-[4.5rem] text-center z-0 leading-tight opacity-20">
              *Who I am,
              <br />
              and What
              <br />
              can I do for
              <br />
              you:)?
            </h1>
          </div>
        </div>
        <Element name="resume">
          <div className="mt-[6em]">
            <ResumeSection />
          </div>
        </Element>
        <Element name="goals">
          <div
            className="goals bg-[#f5f5dc] m-6 rounded-b-4xl p-4 sm:p-6"
            id="goals"
          >
            <h1 className="font-bold text-2xl font-serif sm:text-3xl lg:text-[2.5em] mb-6">
              Goals
            </h1>
            <span className="goalspan text-sm sm:text-base font-sans leading-relaxed">
              As a passionate and curious learner, I’m at the beginning of my
              journey into the tech world. With a solid foundation in web
              development and frameworks like React.js, Next.js, and Express.js
              — along with mobile development using React Native — I am steadily
              building my skill set. I’ve already gained a good understanding of
              Supervised Machine Learning and now aim to deepen my knowledge in
              the broader field of AI, particularly in Deep Learning and
              Computer Vision. Alongside this, I plan to explore cloud platforms
              like AWS and Google Cloud to build scalable, production-ready
              solutions. My goal is to become a full-stack developer with strong
              AI and cloud capabilities, enabling me to create impactful,
              intelligent applications that solve real-world problems.
            </span>
          </div>
        </Element>
      </div>
    </div>
  );
};

export default Singlepage;
