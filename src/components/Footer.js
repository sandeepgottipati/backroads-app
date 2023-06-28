import { pageLinks, socialLinks } from "../data";

const Footer = () => {
    const curr_date = new Date();
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {
                    pageLinks.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.link} className="footer-link">{item.text}</a>
                            </li>
                        )
                    })
                }

            </ul>
            <ul className="footer-icons">
                {socialLinks.map((item) => {
                    return (
                        <li key={item.id}>
                            <a href={item.link} target="_blank" className="footer-icon"
                            ><i className={item.icon}></i
                            ></a>
                        </li>
                    )
                })}


            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{curr_date.getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}
export default Footer