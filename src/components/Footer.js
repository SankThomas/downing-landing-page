const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <h2>Downing</h2>
        </div>

        <nav>
          <ul>
            <li>
              <button>Contribute</button>
            </li>
            <li>
              <button>Github Repo</button>
            </li>
          </ul>

          <div>
            <p>
              Created by{" "}
              <a
                href="https://github.com/SankThomas"
                target="_blank"
                rel="noopenner noreferrer"
              >
                Thomas Sankara
              </a>
            </p>
          </div>
        </nav>
      </footer>
    </>
  )
}

export default Footer
