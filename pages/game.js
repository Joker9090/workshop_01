import Head from 'next/head'
import React from 'react'

const baseConfig = {
  size: 10,
  badBlocks: 5,
}

export default function Game() {

  const [gameConfig, setGameConfig] = React.useState({ ...baseConfig })

  const prepareGame = (config) => {

    let newCofig = { ...config }
    const board = new Array(newCofig.size).fill(0).map(() => new Array(newCofig.size).fill(1));
    const cellSize = 100 / newCofig.size;

    const randomBetween = (a, b) => {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }

    newCofig.board = board;
    if (newCofig.badBlocks > 0) {
      for (let i = 0; i < newCofig.badBlocks; i++) {
        newCofig.board[randomBetween(0, newCofig.size - 1)][randomBetween(0, newCofig.size - 1)] = 0;
      }
    }
    newCofig.cellSize = cellSize;
    newCofig.ready = true;
    newCofig.clicks = [];

    setGameConfig({ ...newCofig })
  }

  const clickHandler = (rowIndex, cellIndex) => {

    const newConfig = { ...gameConfig }
    newConfig.clicks.push([rowIndex, cellIndex])
    setGameConfig({ ...newConfig })
  }

  const checkIfGoodOrBad = (rowIndex, cellIndex) => {
    const { board,clicks } = gameConfig;
    let clicked = false
    for (let i = 0; i < clicks.length; i++) {
      if (clicks[i][0] === rowIndex && clicks[i][1] === cellIndex) {
        clicked = true
        break;
      }
    }
    if (!clicked) return '';

    return board[rowIndex][cellIndex] === 0 ? 'bad' : 'good';
  }

  const buildBoard = (config) => {
    const { board, cellSize } = config;
    return (
      <div className="container-fluid p-0 tablero">
        {board.map((row, rowIndex) => {
          return (
            <div className="fila" key={rowIndex}>
              {row.map((cell, cellIndex) => {
                return (
                  <div onClick={() => clickHandler(rowIndex, cellIndex)} className={`celda ${checkIfGoodOrBad(rowIndex, cellIndex)}`} key={cellIndex} style={{ flex: `1 0 ${cellSize}%`, height: `${cellSize}vh` }}>
                    <div className="content">
                      {cell}
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )

  }

  React.useEffect(() => {
    prepareGame(gameConfig)
  }, [])

  return (
    <>
      <Head>
        <title>Workshop 02 - Game</title>
        <meta name="description" content="Workshop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {gameConfig.ready ? (
        <main className="game">
          {buildBoard(gameConfig)}
        </main>
      ) : <>Loading...</>
      }
    </>
  )
}
