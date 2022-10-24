import { Link } from 'react-router-dom';

function Comic({ comic }) {
    return (
        <div>
            <div>
                <h4 className="p-3 mb-2 text-center">{comic.title}</h4>
                <img className="card-img-top" src={comic.image_url + "." + comic.extension} />
                <div className="card-body">
                    <Link to={`/comic/${comic.comic_id}`}>
                        <button type="button" className="btn btn-sm btn-danger">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Comic