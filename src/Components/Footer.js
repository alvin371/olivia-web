import { Link } from "react-router-dom";
import fb from '../Pages/assets/img/fb-icon.png'
import ig from '../Pages/assets/img/ig-icon.png'
import twt from '../Pages/assets/img/twitter-icon.png'

const Footer = () => {
    return (<div>
        <footer className="p-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 pt-3">
                        <h1 className="footer-title">Banyuwangi Tourism</h1>
                    </div>
                    <div className="col-4" style={{ paddingTop: '100px' }}>
                        <div className="row">
                            <ul className="footer-link">
                                <li>
                                    <Link Link to={'/cookies'}>Kebijakan Cookie |</Link>
                                </li>
                                <li>
                                    <Link Link to={'/cookies'}>Kebijakan Privasi |</Link>
                                </li>
                                <li>
                                    <Link Link to={'/cookies'}>Syarat dan Ketentuan |</Link>
                                </li>
                                <li>
                                    <Link Link to={'/cookies'}>Hubungi Kami</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4 pt-3">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="socmed-title">Follow Us on Our Social Media</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12" style={{ margin: '20px 0px 0px-40px' }}>
                                <ul className="footer-link text-start" style={{ letterSpacing: '20px' }}>
                                    <li>
                                        <a href><img src={fb} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href><img src={ig} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href><img src={twt} alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <p>Copyright 2021 Pemerintah Kabupaten Banyuwangi</p>
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;