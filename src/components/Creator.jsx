function Creator({ creator }) {
    return (
        <div>
            <h4 className="p-3 mb-2 text-center">{creator.first_name} {creator.last_name} : Comics</h4>
            <div className="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <img className="card-img-top" src={creator.image_url + "." + creator.extension} />
                <div className="mask" style={{ backgroundColor: "rgba(249, 49, 84, 0.34)" }}></div>
            </div>
            <div className="card-body">
                <p>{creator.description}</p>
            </div>
        </div>
    )
}

export default Creator