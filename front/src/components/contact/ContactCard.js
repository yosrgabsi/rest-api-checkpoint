import React from 'react'
import './ContactCard.css'
const ContactCard = () => {
  return (
    <div>
      <div className="wrapper">
  <figure className="card">
    <img
      src="https://source.unsplash.com/Co8AlcOhIgE/640x640"
      width={640}
      height={640}
      alt=""
    />
    <figcaption>
      <blockquote>We shape our tools and then the tools shape us.</blockquote>
      <cite>
        Attributed to Winston Churchill, Marshall McLuhan, and John Culkin.
      </cite>
      <p className="credit">
        <strong>Caju Gomes</strong>,
        <a href="https://unsplash.com/photos/Co8AlcOhIgE">Unsplash</a>
      </p>
    </figcaption>
  </figure>
</div>

    </div>
  )
}

export default ContactCard
