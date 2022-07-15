import logo from '../../assets/img/logo.svg'
import ico from '../../assets/img/ico.png'


import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={ico} alt="DSMeta" />
        <h1>Swift Meta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.linkedin.com/in/herisson-tiburcio/" target="_blank"> Herisson Tiburcio</a>
        </p>
      </div>
    </header>
  )
}

export default Header;
