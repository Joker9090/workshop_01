import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Workshop</title>
        <meta name="description" content="Workshop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">

          <div className="container">
            <div className="row">
              <div className="col bkg-grey"><p className="cool-font">Hola mundo</p></div>
              <div className="col bkg-beige">col</div>
              <div className="col bkg-green"><p className="cool-font">Hola mundo</p></div>
            </div>
            <div className="row">
              <div className="col-8 bkg-red">col-8</div>
              <div className="col-4 bkg-blue">col-4</div>
            </div>
          </div>

      </main>
    </>
  )
}
