const Modal = ({showModal,win,closeModal}) => {
    if(!showModal) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{win === '' ? 'Draw' : `Player ${win} wins` }!</h2>
                <button onClick={closeModal}>Restart</button>


            </div>
                
            
        </div>
    )
}
export default Modal;