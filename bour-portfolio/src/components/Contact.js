import React from 'react'

const styles = {
    textAlign: 'center'
}

function Contact () {
    return (
        <article id="contact" style={styles}>
          <h2>Contact Me!</h2>
          <div>
            <a href='mailto:bourpower@gmail.com'>Email</a><br></br>
            <a target="blank" href='https://github.com/SBour1'>GitHub</a><br></br>
            <a target="blank" href='https://www.linkedin.com/in/steve-bour-5522a0222/'>LinkedIn</a><br></br>
            <a href='tel:518-847-5353'>Phone</a>
          </div>
        </article>
    );
}

export default Contact