import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SerieDetail() {
    const serie_id = useParams()
    const [serieDetail, setSerieDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchSerie() {
            const response = await fetch(`http://localhost:3000/api/v1/serie/${serie_id.id}`);
            const data = await response.json()

            setLoading(false)
            setSerieDetail(data.data)
        }
        fetchSerie()
    }, []);

    return (
        <div>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img className="img-fluid rounded-start" src={serieDetail.image_url + "." + serieDetail.extension} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{serieDetail.title}</h5>
                                    <p className="card-text">{serieDetail.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SerieDetail