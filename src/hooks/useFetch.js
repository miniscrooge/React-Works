import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null) // creamos el estado como null para tener en cuenta cualquier tipo de dato que nos venga
  const [loading, setLoading] = useState(true) // booleano qeu nos dice si ha terminado de cargar
  const [error, setError] = useState(false) // booleano qeu nos dice si nos llega un error

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
        }) //modifico array contactos vacio
      .catch(() => setError(true)) //capturamos el error y el loading sigue a true
  }, [url])

  return [data, setData, loading, error]
}

export default useFetch;