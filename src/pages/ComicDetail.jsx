import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ComicDetail() {
    const comic_id = useParams()
    const [comicDetail, setComicDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchComic() {
            const response = await fetch(`http://localhost:3000/api/v1/comic/${comic_id.id}`);
            const data = await response.json()

            setLoading(false)
            setComicDetail(data.data)
        }
        fetchComic()
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
                            <img className="img-fluid rounded-start" src={comicDetail.image_url + "." + comicDetail.extension} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{comicDetail.title}</h5>
                                    <p className="card-text">{comicDetail.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ComicDetail