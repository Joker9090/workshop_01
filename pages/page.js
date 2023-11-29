import Head from 'next/head'
import React from 'react'

export default function Page() {
    return (
        <>
            <Head>
                <title>Workshop -ws-3</title>
                <meta name="description" content="Workshop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <HeaderBar></HeaderBar>
            </main>
        </>
    )
}

export const HeaderBar = () => {

    const [menuActive, setMenuActive] = React.useState(false)

    const checkIfMenuIsActive = () => {
        if (menuActive == true) {
            return 'active'
        } else {
            return ''
        }
    }
    

    const options = [
        { name: 'opcion 1', link: '/' },
        { name: 'opcion 4', link: '/' },
        { name: 'opcion 5', link: '/' },
    ]

    return (
        <div className='HeaderBar'>
            <div className='left'>
                <div className='logo' ></div>
                <div className='titulo' >
                    <p>Hola Mundo</p>
                </div>
            </div>
            <div className='right'>
                <div className='ProfileMenu' onClick={() => setMenuActive(true)}></div>
                <div className={"MenuOptions " + checkIfMenuIsActive()}>
                    {options.map((option,index) => {
                        return (
                            <div key={"option-key-"+index} className='option' onClick={() => setMenuActive(false)} ><p>{option.name}</p></div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}