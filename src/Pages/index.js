import './style/style.css'
import { Link } from 'react-router-dom';
// Media Assets
import baluran from './assets/img/baluran.jpg'
import ijen from './assets/img/ijen.jpg'
import teluk_hijau from './assets/img/teluk_hijau.jpg'
import ijen2 from './assets/img/ijen2.jpg'
import hutan from './assets/img/hutan.jpg'
import rujak from './assets/img/rujak_soto.jpg'

import { useState } from 'react'
import Footer from '../Components/Footer'

const Index = () => {
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
            {/* Nav */}
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
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={baluran} className="d-block w-100 h-25" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Self Healing #BanyuwangiAja</h5>
                                <Link className="btn btn-dark mt-5 btn-lg" Link to={'/'}>Baca Selengkapnya</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ijen} className="d-block w-100 h-25" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Self Healing #BanyuwangiAja</h5>
                                <Link className="btn btn-dark mt-5 btn-lg" Link to={'/'}>Baca Selengkapnya</Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={teluk_hijau} className="d-block w-100 h-25" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Self Healing #BanyuwangiAja</h5>
                                <Link className="btn btn-dark mt-5 btn-lg" Link to={'/'}>Baca Selengkapnya</Link>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container">
                    <hr size={5} />
                    <div className="card">
                        <div className="card-header">
                            PPKM
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>PPKM (Promosi Produk Kuliner & Merchandise)

                                    yang diinisiasi oleh Dinas Kebudayaan dan Pariwisata Kabupaten Banyuwangi.
                                    Cintai Produk UMKM Banyuwangi. Produk lokal buatan asli masyarakat Banyuwangi.
                                    Beli dengan cara hubungi kontak yang tersedia pada katalog produk</p>
                            </blockquote>
                        </div>
                    </div>
                    <hr size={5} />
                </div>
                {/* Cerita Petualangan, Youtube Player */}
                <div className="container">
                    <div className="row justify-content-center">
                        <iframe className="cerita-video" src="https://www.youtube.com/embed/zzJcADNiNhg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        <h1 className="cerita-title text-center">Majestic Banyuwangi</h1>
                        <hr />
                    </div>
                </div>
                <hr size={5} />
                {/* Destinasi Pilihan */}
                <div className="container">
                    <div className="row">
                        <h1 className="destinasi-title">Destinasi Pilihan Wisata</h1>
                    </div>
                    <div className="row ">
                        <div className="col-4 destinasi-card">
                            <a href="https://banyuwangitourism.com/">
                                <div className="card-destination mb-3 position-relative">
                                    <a href>
                                        <img src={ijen} className="img-fluid" alt="..." />
                                        <h1 className="destinasi-caption">Ijen</h1>
                                    </a>
                                </div>
                            </a>
                        </div>

                        <div className="col-4 destinasi-card">
                            <a href="https://banyuwangitourism.com/">
                                <div className="card-destination mb-3 position-relative">
                                    <img src={baluran} className="img-fluid" alt="..." />
                                    <h1 className="destinasi-caption">Baluran</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-4 destinasi-card">
                            <a href="https://banyuwangitourism.com/">
                                <div className="card-destination mb-3 position-relative">
                                    <img src={hutan} className="img-fluid" alt="..." />
                                    <h1 className="destinasi-caption">De Djawatan</h1>
                                </div>
                            </a>
                        </div>
                        <div className="col-4 destinasi-card">
                            <a href="https://banyuwangitourism.com/">
                                <div className="card-destination mb-3 position-relative">
                                    <img src={teluk_hijau} className="img-fluid" alt="..." />
                                    <h1 className="destinasi-caption">Teluk Hijau</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <hr size={5} />
                {/* Apa Kata Mereka */}
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 text-start my-5">
                            <h1>Apa Kata Mereka?</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-8">
                                        <img src={baluran} className="img-fluid card-img" alt="..." />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <h5 className="card-title">Ardy Arnyth</h5>
                                            <p className="card-text">Buruan yang mau wisata ke Banyuwangi, jangan tunggu nanti nanti, cepet Vaksin dan tetap patuhi protokol kesehatan</p>
                                            <p className="card-text"><small className="text-muted">27-02-2021</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr size={5} />
                {/* Panduan Perjalanan */}
                <div className="container">
                    <div className="row my-4">
                        <div className="col-12">
                            <h1>Panduan Perjalanan</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card mb-3">
                                <img src={ijen2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Kementerian Pariwisata dan Ekonomi Kreatif mempersembahkan InDOnesia
                                        CARE, sebuah simbol dukungan berupa panduan protokol kesehatan pariwisata yang
                                        mengedepankan usaha terbaik dalam mewujudkan kebersihan, kesehatan, keselamatan, dan
                                        kelestarian lingkungan bersama di destinasi pariwisata Indonesia.</p>
                                    <Link Link to={'/panduan'} className="btn btn-sign-in">Baca Selengkapnya</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Index;