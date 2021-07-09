import tiredFace from "../images/tired-face.svg"
import thumbsUp from "../images/thumbs-up.svg"
import confetti from "../images/confetti.svg"

const Cards = () => {
  return (
    <>
      <section className="cards">
        <div className="cards-inner">
          <article>
            <img src={tiredFace} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              dolorum nulla voluptatum non nesciunt earum!
            </p>
          </article>
        </div>
        <div className="cards-inner">
          <article>
            <img src={thumbsUp} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              dolorum nulla voluptatum non nesciunt earum!
            </p>
          </article>
        </div>
        <div className="cards-inner">
          <article>
            <img src={confetti} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
              dolorum nulla voluptatum non nesciunt earum!
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Cards
