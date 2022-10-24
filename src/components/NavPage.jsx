function NavPage(props) {
    return (
        <header className="d-flex p-2 justify-content-between align-items-center">
            <p className="text-danger">Page: {props.page} </p>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button onClick={() => props.setPage(
                            props.page - 1 >= 1  ? props.page - 1 : props.lastPage
                        )}
                            className="btn btn-sm btn-outline-danger">
                            Previous
                        </button>
                    </li>
                    <li className="page-item">
                        <button onClick={() => props.setPage(
                            props.page + 1 < props.lastPage ? props.page + 1 : props.lastPage
                        )}
                            className="btn btn-sm btn-outline-danger">
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default NavPage