import React from "react";
import profile from "../../images/profpic.jpg"

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
  pic: {
    marginLeft: '45%',
    marginRight: '45%'
  }
};

function AboutMe() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        <img style={styles.pic} src={profile} alt="profile pic"/>
        <p>
          My name is Steve Bour, and I am a Full Stack student with the
          University of Penn. I was born and raised in upstate New York, just
          outside of the capital of Albany. I currently reside in the city of
          Chicopee, Massachusetts. My hobbies include watching UFC and NHL,
          playing video games or table top games with my friends, painting
          miniatures to play with, and going to the movies.
        </p>
        <p>
          Professionally, I have worked in the insurance industry for 13 years,
          with roles ranging from a support role in handling phones and mail,
          full claims investigation involving complex liablity, inspecting and
          appraising the value of damages to vehicles, and working in a quality
          assurance role to maintain standards.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
