import React from 'react'
import Card from 'react-bootstrap/Card'


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple"> GARV AHUJA </span>
            from <span className="purple"> Roorkee, India.</span>
            <br />I am a Full Stack Developer.
            <br />
            <br />
            I fell in love with coding and enjoy building projects, solving challenging problems, and exploring new technologies. I am always looking to learn, improve, and turn ideas into real-world applications.
          </p>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "The world rewards you for value provided, not time spent."{' '}
          </p>
          <footer className="blockquote-footer">James clear</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
