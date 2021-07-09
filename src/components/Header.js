import githubIcon from "../images/github.svg"

const Header = () => {
  return (
    <header className="header">
      <ul>
        <li>
          <button>Contribute</button>
        </li>
        <li>
          <button>Donate</button>
        </li>
      </ul>

      <div>
        <a
          href="https://github.com/SankThomas/downing-landing-page.git"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="github-icon" /> Github
          Repo
        </a>
      </div>
    </header>
  )
}

export default Header
