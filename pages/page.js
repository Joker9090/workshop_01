import Head from 'next/head'
import React from 'react'

export default function Page() {
    return (
        <>
            <Head>
                <title>Workshop ws-3</title>
                <meta name="description" content="Workshop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <HeaderBar></HeaderBar>
                <div className='push-headerbar'></div>
                <SectionPinterest></SectionPinterest>
                <SectionPinterest reversed={true}></SectionPinterest>
                <SectionPinterest></SectionPinterest>
            </main>
        </>
    )
}


export const SectionPinterest = ({ reversed }) => {
    const obj = {
        title: 'Hola mundo',
        description: 'Lorem ipsum dolor sit',
        cta: 'Ver más',
    }

    return (
        <div className='SectionPinterest'>
            <div className='container'>
                <div className={`row full-height ${(reversed) ? 'reversed' : ''}`}>
                    <div className='col-12 col-md-3 centered'>
                        <div className='info-box'>
                            <div className='title'><p className='mb-0'>{obj.title}</p></div>
                            <div className='description'><p className='mb-0'>{obj.description}</p></div>
                            <div className='cta'><p className='mb-0'>{obj.cta}</p></div>
                        </div>
                    </div>
                    <div className='col-12 col-md-9 relative'>
                        <div className='img-box img-1'></div>
                        <div className='img-box img-2'></div>
                        <div className='img-box img-3'></div>
                        <div className='img-box img-4'></div>
                    </div>
                </div>
            </div>
        </div>
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