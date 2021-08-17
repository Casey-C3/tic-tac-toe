
const Board = ({board, placeMark}) => {
    if(board.isArray) {
        console.log(board)
    }
    return (
        <div className='container'>
        <div className='game'>
          <h1>Tic-Tac-Toe</h1>

          
        </div>
        <div>
          
          <div className='board'>
             
          {board.map((spot,index) => (
              <div className='board-row-child' id={index} key={index+1}onClick={(e) => placeMark(e.target.id)}>{spot}</div> 
          ))}
             
             
           
  
          </div>
        </div>
  
      </div>
    )
}
export default Board

/*   <div className='board-row-child' id={index+1} onClick={(e) => placeMark(e.target.id)}>{spot}</div>   */