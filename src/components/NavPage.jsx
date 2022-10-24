function NavPage(props) {
    return (
        <header className="d-flex p-2 justify-content-between align-items-center">
            <p className="text-danger">Page: {props.page} </p>
            <button onClick={() => props.setPage(
                    props.page + 1 < props.lastPage ? props.page + 1 : props.lastPage
                )} 
                className="btn btn-sm btn-outline-danger">
                Page: {props.page + 1}
            </button>
        </header>
    )
}

export default NavPage