import { useEffect, useState } from 'react'
import Serie from '../components/Serie'
import NavPage from '../components/NavPage'

function Series() {
    const [series, setSeries] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)

    useEffect(() => {
        async function fetchSeries() {
            const response = await fetch(`http://localhost:3000/api/v1/series?page=${page}`);
            const data = await response.json()
            const metaData = data.metadata

            setLoading(false)
            setSeries(data.data)
            setLastPage(metaData.pages)
        }
        fetchSeries()
    }, [page]);
    return (
        <div className="container text-center">
            <h3>SERIES</h3>
            <p></p>
            <NavPage page={page} setPage={setPage} lastPage={lastPage} />
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4">{
                    series.map((serie) => {
                        return (
                            <div className="col" key={serie.id}>
                                <div className="card h-100" style={{ width: "18rem" }}>
                                    <Serie serie={serie} />
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

export default Series