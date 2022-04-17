import React from "react";
import purpleGriffin from "../../images/pexels-andrea-piacquadio-3769138.jpg";
import pizza from "../../images/pexels-mart-production-8165239.jpg";
import planner from "../../images/pexels-bich-tran-760718.jpg";
import quiz from "../../images/pexels-pixabay-270360.jpg";
import commerce from "../../images/pexels-sora-shimazaki-5926389.jpg";
import tracker from "../../images/pexels-edmond-dantès-4344860.jpg";

const styles = {
  big: {
    width: "75%",
    marginLeft: "12%",
    marginRight: "12%",
  },
  small: {
    marginLeft: "20%",
    marginRight: "20%",
    paddingTop: "5%",
  },
};

function Project() {
  return (
    <article id="work">
      <h2 className="text-center">Projects</h2>
      <section className="card" style={styles.big}>
        <a
          target="blank"
          href="https://britt-klose.github.io/Project-1-griffins/index.html"
        >
          <img
            className="img-fluid max-width: 100% height: auto"
            src={purpleGriffin}
            alt="Purple Griffin Travel Planner"
          />
        </a>
        <div class="textContain">
          <p>Purple Griffin Travel Planner</p>
        </div>
      </section>
      <section className="card" style={styles.big}>
        <a target="blank" href="https://stuccos-pizzeria-23709.herokuapp.com/">
          <img
            className="img-fluid max-width: 100% height: auto"
            src={pizza}
            alt="Stucco's Pizzeria"
          />
        </a>
        <div class="textContain">
          <p>Stucco's Pizzeria E-Commerce</p>
        </div>
      </section>
      <section className="container" style={styles.small}>
        <div className="row">
          <div className="col-6 justify-content-center">
            <a target="blank" href="https://sbour1.github.io/day-planner/">
              <img
                className="img-fluid max-width: 100% height: auto"
                src={planner}
                alt="Work Day Planner"
              />
            </a>
            <div className="textContain">
              <p>Day Planner</p>
            </div>
          </div>
          <div className="col-6 justify-content-center">
            <a target="blank" href="https://sbour1.github.io/code-quiz/">
              <img
                className="img-fluid max-width: 100% height: auto"
                src={quiz}
                alt="Coding Quiz"
              />
            </a>
            <div className="textContain">
              <p>Coding Quiz</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={styles.small}>
        <div className="row">
          <div className="col-6 justify-content-center">
            <a
              target="blank"
              href="https://github.com/SBour1/ECommerce_Back_End"
            >
              <img
                className="img-fluid max-width: 100% height: auto"
                src={commerce}
                alt="E-Commerce"
              />
            </a>
            <div className="textContain">
              <p>E-Commerce Back End</p>
            </div>
          </div>
          <div className="col-6 justify-content-center">
            <a target="blank" href="https://github.com/SBour1/Employee_Tracker">
              <img
                className="img-fluid max-width: 100% height: auto"
                src={tracker}
                alt="Employee Tracker"
              />
            </a>
            <div className="textContain">
              <p>Employee Tracker</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Project;
