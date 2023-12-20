import Head from 'next/head'
import React from 'react'

export default function Request() {

    const [info, setInfo] = React.useState(null)
    const [infoStatus, setInfoStatus] = React.useState('')
    const [pokemonInfo, setPokemonInfo] = React.useState(null)
    const [pokemonInfoStatus, setPokemonInfoStatus] = React.useState('')

    const grabInfo = () => {
        setInfoStatus('loading')
        getPokemons().then(setInfo)
    }

    const grabPokemonInfo = (url) => {
        setPokemonInfoStatus('loading')
        getPokemonInfo(url).then(setPokemonInfo)
    }

    React.useEffect(() => {
        if (info) setInfoStatus('success')
    }, [info])

    React.useEffect(() => {
        if (pokemonInfo) setPokemonInfoStatus('success')
    }, [pokemonInfo])

    return (
        <>
            <Head>
                <title>Workshop ws-5</title>
                <meta name="description" content="Workshop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <button onClick={() => grabInfo()}> Traer informacion </button>
                {infoStatus == 'loading' && (
                    <p> Cargando informacion </p>
                )}
                {info && (
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6 pokemon-list'>

                                <div><p>Count: {info.count}</p></div>
                                {info.results.map((pokemon, index) => {
                                    return (
                                        <div className='pokemon-list-item' key={index} onClick={() => grabPokemonInfo(pokemon.url)}>
                                            <p className='mb-0'>{pokemon.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            {pokemonInfoStatus == 'loading' && (
                                <div className='col-6'>
                                    <p> Cargando informacion </p>
                                </div>
                            )}
                            {pokemonInfo && pokemonInfoStatus == "success" && (
                                <div className='col-6'>
                                    <h2 className='m-auto'>{pokemonInfo.name}</h2>
                                    <img width={"100%"} src={pokemonInfo.sprites.front_default} />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}


export const getPokemons = () => {
    let limit = 100000
    let offset = 0
    let page = 1
    const str = '?limit=' + limit + '&offset=' + offset + '&page=' + page

    return new Promise((resolve, reject) => {
        fetch("https://pokeapi.co/api/v2/pokemon" + str).then((response) => {
            return response.json()
        }).then(resolve).catch(reject)
    })
}


export const getPokemonInfo = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((response) => {
            return response.json()
        }).then(resolve).catch(reject)
    })
}