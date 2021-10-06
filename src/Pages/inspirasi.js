import './style/style.css'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useState } from 'react';

// asset media
import baluran from './assets/img/baluran.jpg'
import ijen from './assets/img/ijen.jpg'
const Inspirasi = () => {
    const [navbar, setNavbar] = useState(false)

    const NavbaronScroll = () => {
        if (window.scrollY > 300) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }


    window.addEventListener('scroll', NavbaronScroll)
    return (
        <div>
            <nav className={navbar ? 'navbar fixed-top navbar-expand-lg navbar-light p-md-3 bg-dark shadow' : 'navbar fixed-top navbar-expand-lg navbar-light p-md-3'}>
                <div className="container">
                    <Link className="navbar-brand d-flex aligns-item-center" Link to={'/'}>Banyuwangi</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" Link to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" Link to={'/inspirasi'}>Inspirasi Seru!</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" Link to={'/explore'}>Go Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" Link to={'/panduan'}>Panduan Dasar</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-sign-in btn-sm d-flex aligns-item-end" Link to={'/login'}>Sign In</Link>
                </div>
            </nav>
            {/* Body */}
            <div className="landing-page">
                {/* Carousel */}
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={baluran} className="d-block w-100 h-25" alt="..." />
                            {/* <div class="carousel-caption d-none d-md-block">
                        <h5>Self Healing #BanyuwangiAja</h5>
                        <a href="" class="btn btn-dark mt-5 btn-lg">Baca Selengkapnya</a>
                    </div> */}
                        </div>
                    </div>
                </div>
                <div className="container">
                    <nav style={{ bsBreadcrumbDivider: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor"/%3E%3C/svg%3E")' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">5 Wonders</li>
                        </ol>
                    </nav>
                </div>
                {/* Content */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center">Explore the Unique Culture and heritage in Banyuwangi</h1>
                            <p className="text-center">Indonesia is a huge nation comprised of hundreds of cultures derived from
                                local regions, making
                                it one of the most diverse countries in the world. Explore the unique culture and heritage of
                                Banyuwangi Region!</p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col-3 destinasi-card">
                                <div className="card-destination mb-3 position-relative">
                                    <img src={ijen} className="img-fluid" alt="..." />
                                    <h1 className="destinasi-caption">Teluk Hijau</h1>
                                </div>
                            </div>
                            <div className="col-3 destinasi-card">
                                <div className="card-destination mb-3 position-relative">
                                    <img src={ijen} className="img-fluid" alt="..." />
                                    <h1 className="destinasi-caption">Teluk Hijau</h1>
                                </div>
                            </div>
                            <div className="col-3 destinasi-card">
                                <div className="card-destination mb-3 position-relative">
                                    <img src={ijen} className="img-fluid" alt="..." />
                                    <h1 className="destinasi-caption">Teluk Hijau</h1>
                                </div>
                            </div>
                            <div className="col-3 destinasi-card">
                                <div className="card-destination mb-3 position-relative">
                                    <img src={ijen} className="img-fluid" alt="..." />
                                    <h1 className="destinasi-caption">Teluk Hijau</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <Footer />
            </div></div >
    );
}

export default Inspirasi;