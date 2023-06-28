import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
const navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                {/*< !--left this comment on purpose -->*/}
                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((data) => {
                        return (
                            <li key={data.key}>
                                <a href={data.link} className='nav-link' >{data.text}</a>
                            </li>
                        )
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((data) => {
                        return (
                            <li key={data.id}>
                                <a href={data.link} target="_blank" className="nav-icon"
                                ><i className={data.icon}></i
                                ></a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default navbar