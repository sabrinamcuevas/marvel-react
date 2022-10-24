import { Link } from 'react-router-dom';

function Comic({ comic }) {
    return (
        <div>
            <div>
                <h4 className="p-3 mb-2 text-center">{comic.title}</h4>
                <div className="bg-image hover-overlay hover-zoom hover-shadow ripple">
                    <img className="card-img-top" src={comic.image_url + "." + comic.extension} />
                    <Link to={`/comic/${comic.comic_id}`}>
                        <div className="mask" style={{ backgroundColor: "rgba(249, 49, 84, 0.34)" }}></div>
                    </Link>
                </div>
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