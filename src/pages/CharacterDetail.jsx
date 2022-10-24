import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function CharacterDetail() {
    const character_id = useParams()
    const [characterDetail, setCharacterDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCharacter() {
            const response = await fetch(`http://localhost:3000/api/v1/character/${character_id.id}`);
            const data = await response.json()

            setLoading(false)
            setCharacterDetail(data.data)
        }
        fetchCharacter()
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
                            <img className="img-fluid rounded-start" src={characterDetail.image_url + "." + characterDetail.extension} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{characterDetail.name}</h5>
                                    <p className="card-text">{characterDetail.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CharacterDetail