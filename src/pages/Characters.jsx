import { useEffect, useState } from 'react'
import Character from '../components/Character'
import NavPage from '../components/NavPage';

function Characters() {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)

    useEffect(() => {
        async function fetchCharacters() {
            const response = await fetch(`http://localhost:3000/api/v1/characters?page=${page}`);
            const data = await response.json()
            const metaData = data.metadata

            setLoading(false)
            setCharacters(data.data)
            setLastPage(metaData.pages)
        }
        fetchCharacters()
    }, [page]);
    return (
        <div className="container text-center">
            <h3>CHARACTERS</h3>
            <p>Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!</p>
            <NavPage page={page} setPage={setPage} lastPage={lastPage} />
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-md-4 g-4">{
                    characters.map((character) => {
                        return (
                            <div className="col" key={character.id}>
                                <div className="card h-100" style={{ width: "18rem" }}>
                                    <Character character={character} />
                                </div>
                            </div>
                        )
                    })
                }</div>
            )}
            <NavPage page={page} setPage={setPage} />
        </div>
    )
}

export default Characters