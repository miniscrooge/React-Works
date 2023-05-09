

const Jugadores = ({jugadores,numero}) => {
    return(
        <div>
            {jugadores.map((jugador, index) =><p class={jugador.posicion}>{jugador.name}</p>)}
            <p>{numero}</p>
        </div>
    )
}

export default Jugadores