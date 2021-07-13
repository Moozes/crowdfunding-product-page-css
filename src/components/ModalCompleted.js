import check from '../images/icon-check.svg';
// <ModalCompleted>
//   img
//   h2
//   p
//   button

export default function ModalCompleted(props) {
    return(
        <div className="modal-completed-outer">
            <div className="modal-completed card">
                <img src={check} alt="done"/>
                <h2>Thanks for your support!</h2>
                <p>  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                <button className="btn-primary"
                    onClick={props.removeModalCompleted}
                >Got it!</button>
            </div>
        </div>
    );
}