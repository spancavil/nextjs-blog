/* NextJS por default cachea todo, entonces cuando se vuelve a visitar la page, no vuelve a hacer fetch, sino que muestra los datos que ya estaban cacheados.
Para modificar este comportamiento, podemos modificar el fetch. */

const fetchData = async () => {
    //Default option
    const response = await fetch('uri', {cache: 'force-cache'})
    //Refetch on every render
    const response2 = await fetch('uri', {cache: 'no-store'})

    //Refetch if 1 hour passed
    const response3 = await fetch('uri', {next: {revalidate: 3600}})
}