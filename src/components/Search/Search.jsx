

const Search = ({contactos}) => {
    return(
        <div>
            <h2>Buscar</h2>
            <div className="search-bar">
                <input placeholder="Introduce los términos de búsqueda"/>
                <button type="submit">Buscar</button>
            </div>
        </div>
    )
}

export default Search