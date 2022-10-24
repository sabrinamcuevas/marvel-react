import { Link } from 'react-router-dom';

function Serie({ serie }) {
    return (
        <div>
            <div>
                <h4 className="p-3 mb-2 text-center">{serie.title}</h4>
                <img className="card-img-top" src={serie.image_url + "." + serie.extension} />
                <div className="card-body">
                    <Link to={`/serie/${serie.serie_id}`}>
                        <button type="button" className="btn btn-sm btn-danger">More Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Serie