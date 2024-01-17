import React from "react";
import "./review.css";

function Reviews() {
  return (
    <div className="review-title-cards">
      <p className="review-title-cards-p">Read what they say about me</p>
      <div className="review-container">
        <div className="review">
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
        </div>
        <div className="review">
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
        </div>
        <div className="review">
          {/* <img src="images/judy-d.png" alt="" /> */}
          <div className="description-container">
            <span>
              "As a Designated Partner of D'vastra, we have mentored and managed
              Harsh during his contract period, where he worked as a Backend
              developer, and we've had numerous opportunities to observe him
              closely during that time. He is always up for learning new
              technologies as per the requirement of the project. Harsh is very
              fluid in his communication with his peers and his seniors. He will
              only be an asset to whichever organization he belongs to."
            </span>
          </div>
          <div className="review-giver-info">
            <p className="bold">Judy Winnie Dsouza</p>
            <p className="org-name">Partner D'vastra</p>
          </div>
        </div>
        {/* <div className="review">asdfasdf</div> */}
      </div>
    </div>
  );
}

export default Reviews;
