import { useEffect, useState } from 'react'
import Comic from '../components/Comic'
import NavPage from '../components/NavPage'

function Comics() {
    const [comics, setComics] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)

    useEffect(() => {
        async function fetchComics() {
            const response = await fetch(`http://localhost:3000/api/v1/comics?page=${page}`);
            const data = await response.json()
            const metaData = data.metadata

            setLoading(false)
            setComics(data.data)
            setLastPage(metaData.pages)
        }
        fetchComics()
    }, [page]);
    return (
        <div className="container text-center">
            <h3>COMICS</h3>
            <p>Best selling digital comics</p>
            <NavPage page={page} setPage={setPage} lastPage={lastPage} />
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4">{
                    comics.map((comic) => {
                        return (
                            <div className="col" key={comic.id}>
                                <div className="card h-100" style={{ width: "18rem" }}>
                                    <Comic comic={comic} />
                                </div>
                            </div>
                        )
                    })
                }</div>
            )}
            <NavPage page={page} setPage={setPage} />
        </div>
    )
}

export default Comics