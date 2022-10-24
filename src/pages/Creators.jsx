import { useEffect, useState } from 'react'
import Creator from '../components/Creator'
import NavPage from '../components/NavPage'

function Creators() {
    const [creators, setCreators] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)

    useEffect(() => {
        async function fetchCreators() {
            const response = await fetch(`http://localhost:3000/api/v1/creators?page=${page}`);
            const data = await response.json()
            const metaData = data.metadata

            setLoading(false)
            setCreators(data.data)
            setLastPage(metaData.pages)
        }
        fetchCreators()
    }, [page]);
    return (
        <div className="container text-center">
            <h3>CREATORS</h3>
            <p></p>
            <NavPage page={page} setPage={setPage} lastPage={lastPage} />
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4">{
                    creators.map((creator) => {
                        return (
                            <div className="col" key={creator.id}>
                                <div className="card h-100" style={{ width: "18rem" }}>
                                    <Creator creator={creator} />
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

export default Creators