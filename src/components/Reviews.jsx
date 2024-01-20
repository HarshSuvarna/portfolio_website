"use client";
import React, { useEffect, useRef } from "react";
import "./review.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Pdf from "../../public/files/lor_d.pdf";

function Reviews() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 7,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div id="recommendations">
      <p data-scroll data-scroll-speed="0.02" className="recommendations-p">
        Read what they say about me
      </p>
      <motion.div
        className="review-container"
        ref={ref}
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 3, type: "tween" }}
      >
        <motion.div
          className="review"
          variants={item}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/harsh-suvarna-a8220a14b/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <div className="description-container">
            <span>
              "It was a pleasure to have Harsh on the team from CODE B working
              on the Meahana platform. As an early startup, our requirements
              could sometimes be vague and changeable, and I really appreciate
              that Harsh would think about the problem we were trying to solve,
              ask intelligent clarifying questions, provide suggestions, and
              deliver top quality solutions. Beyond being a solid developer,
              Harsh always brought a great positive energy and enthusiasm to the
              team. I recommend him highly."
            </span>
          </div>
          <div className="review-giver-info">
            <p className="bold">John Hathaway</p>
            <p className="org-name">Co-founder Meahana</p>
          </div>
        </motion.div>
        <motion.div
          className="review"
          variants={item}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/harsh-suvarna-a8220a14b/",
              "_blank",
              "noreferrer"
            )
          }
        >
          <div className="description-container">
            <span>
              "I had the pleasure of working with Harsh for almost a year on one
              project at Code B. He is a very fast and keen learner,
              hardworking, honest about the work, has the right attitude and
              very responsible. Harsh led a team and was responsible for
              developing few important features of the project. He knows his
              stack very well. I recommend Harsh."
            </span>
          </div>
          <div className="review-giver-info">
            <p className="bold">Dhaval Gala</p>
            <p className="org-name">Director Code B</p>
          </div>
        </motion.div>
        <motion.div className="review" variants={item}>
          {/* <img src="images/judy-d.png" alt="" /> */}
          <div className="description-container">
            <span>
              <a href={Pdf} target="_blank">
                "As a Designated Partner of D'vastra, we have mentored and
                managed Harsh during his contract period, where he worked as a
                Backend developer, and we've had numerous opportunities to
                observe him closely during that time. He is always up for
                learning new technologies as per the requirement of the project.
                Harsh is very fluid in his communication with his peers and his
                seniors. He will only be an asset to whichever organization he
                belongs to."
              </a>
            </span>
          </div>
          <div className="review-giver-info">
            <p className="bold">Judy Winnie Dsouza</p>
            <p className="org-name">Partner D'vastra</p>
          </div>
        </motion.div>
        {/* <div className="review">asdfasdf</div> */}
      </motion.div>
    </div>
  );
}

export default Reviews;
