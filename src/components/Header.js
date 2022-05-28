import { FaGithub } from "react-icons/fa"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Downing</h2>
        <ul>
          <li>
            <button>Contribute</button>
          </li>
        </ul>
      </div>

      <div>
        <a
          href="https://github.com/SankThomas/downing-landing-page.git"
          target="_blank"
          rel="noopenner noreferrer"
        >
          <FaGithub className="github-icon" />
        </a>
      </div>
    </header>
  )
}

export default Header
