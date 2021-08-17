import React, { useState,useEffect } from 'react'
import Board from './Board'
import Modal from './Modal'
const App = () => {
  const[turn,setTurn] = useState(true)
  const[board,setBoard] = useState(['','','','','','','','',''])
  const[winner,setWinner] = useState('')
  const[round,setRound] = useState(0)
  const[modal,setModal] = useState(false)
  const[draw,setDraw] = useState(false)
  

  const winState =[[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,5],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]];


  const placeMarker = (value) => {
    let rounds = round+1
    setRound(rounds)
    if(board[value].length === 0) {
      let newBoard = [...board]
      newBoard[value] = turn ? 'X':'O'
      for(let i = 0; i < winState.length; i++) {
        let slot = winState[i][0]
        let slot1 = winState[i][1]
        let slot2 = winState[i][2]
        if(newBoard[slot] !== '' && newBoard[slot] === newBoard[slot1] && newBoard[slot2] === newBoard[slot] ) {
          let win = turn ? 'X':'O'
          setWinner(win)
          setModal(true)
          
          
        } 

      }
      
      setBoard(newBoard)
      setTurn(!turn)
      
    }  
    if(rounds === 9 && winner=== '') {
      setDraw(!draw)
      setModal(true)
      
    }
  
  }

  const closeModal = () => {
    const newBoard = ['','','','','','','','','']
    setBoard(newBoard)
    setWinner('')
    setTurn(true)
    setModal(false)
    setRound(0)
    setDraw(false)

  }
 
  return(
    <div>
      <div>
        
      </div>
      <Board board={board} placeMark = {placeMarker} />
     
      <Modal showModal={modal} win={winner} closeModal={closeModal} draw = {draw}/>  
      <div className='player-turn'>
        Next Player: {turn ? 'X':'O'}
      </div>
    </div>
    
  )
}
export default App

