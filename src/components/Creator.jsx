function Creator({creator}) {
    return (
        <div>
            <h4 className="p-3 mb-2 text-center">{creator.first_name} {creator.last_name} : Comics</h4>
            <img className="card-img-top" src={creator.image_url + "." + creator.extension} />
            <div className="card-body">
                <p>{creator.description}</p>
            </div>
        </div>
    )
  }
  
export default Creator