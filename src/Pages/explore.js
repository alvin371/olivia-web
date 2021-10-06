import './style/style.css'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer.js'
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import Loading from '../Components/Loading'

const Explore = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)

    const userPerPage = 10
    const pagesVisited = pageNumber * userPerPage
    const news = async () => {
        try {
            const res = await axios.get('https://api-berita-indonesia.vercel.app/suara/lifestyle/')
            console.log('', res.data.data.posts)
            setData(res.data.data.posts)
            setLoading(true)
        } catch (err) {
            console.log(err.message)
        }
    }

    const displayNews = data.slice(pagesVisited, pagesVisited + userPerPage).map(datas => {
        return (
            <div className="col-6">
                <div className="card my-4">
                    <img src={datas.thumbnail} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{datas.title}</h5>
                        <p className="card-text">{datas.description}</p>
                        <a href={datas.link} className="btn btn-primary">Baca Lebih Lengkap</a>
                    </div>
                </div>
            </div>
        )
    })

    const pageCount = Math.ceil(data.length / userPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    useEffect(() => {
        news()
    }, [])


    return (
        < div >
            {/* Nav */}
            < nav className="navbar navbar-expand-lg navbar-light bg-dark shadow p-md-3" >
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
            </nav >
            {/* Body */}
            < div className="container" >
                <nav style={{ bsBreadcrumbDivider: 'url("data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="8" height="8"%3E%3Cpath d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="currentColor"/%3E%3C/svg%3E")' }} aria-label="breadcrumb" className="my-5">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-12">
                        <div className="row justify-content-center m-5">
                            <div className="col-7">
                                <input type="text" placeholder="Search..." className="form-control rounded" style={{ width: '100%', height: '55px', borderRadius: '55px' }} />
                            </div>
                            <div className="col-4">
                                <button className="btn btn-sign-in rounded-pill py-3 px-5" style={{ fontSize: '20px' }}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {loading ? news : <Loading />}
                    <div className="row">
                        {displayNews}
                        <div className="d-flex justify-content-center my-5">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"pagination"}
                                previousLinkClassName={"page-link"}
                                nextLinkClassName={"page-link"}
                                activeLinkClassName={"page-link"}
                                pageClassName={"page-item"}
                                breakClassName={"page-item"}
                                pageLinkClassName={"page-link"}
                                breakLinkClassName={"page-link"}
                            />
                        </div>
                    </div>
                </div>
            </div >
            {/* Footer */}
            < Footer />
        </div >
    );
}

export default Explore;