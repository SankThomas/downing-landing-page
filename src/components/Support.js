const Support = () => {
  return (
    <>
      <section className="support">
        <article className="support-container">
          <div className="support-inner">
            <h3>Support</h3>
            <p>
              Support the development of Downing CSS with a donation using the
              button below. Consider becoming a sponsor to be added to the
              Sponsors’ List
            </p>
            <div className="buttons">
              <button className="btn-orange">Donate</button>
              <button className="btn-green">Become a sponsor</button>
              <button className="btn-dark">Sponsors' List</button>
            </div>
          </div>

          <div className="contribute-inner">
            <h3>Contribute</h3>
            <p>
              Read the Contributing.md file to read how you can become a
              contributor to Downing CSS.
            </p>
            <div className="buttons">
              <button className="btn-green">Read Contributing.md</button>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Support
