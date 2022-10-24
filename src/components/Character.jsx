import { Link } from 'react-router-dom';

function Character({character}) {
    return (
        <div>
            <h4 className="p-3 mb-2 text-center">{character.name}</h4>
            <img className="card-img-top" src={character.image_url + "." + character.extension} />
            <div className="card-body">
                <Link to={`/character/${character.character_id}`}>
                    <button type="button" className="btn btn-sm btn-danger">More Details</button>
                </Link>
            </div>
        </div>
    )
  }
  
  export default Character