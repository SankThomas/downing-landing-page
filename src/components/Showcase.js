import hero from "../images/hero.svg"

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <article className="text">
            <h3>This is Downing</h3>
            <h1>The Minimalist CSS Framework</h1>
          </article>
          <article className="image">
            <img src={hero} alt="html and css" />
          </article>
        </div>
      </section>
    </>
  )
}

export default Showcase
