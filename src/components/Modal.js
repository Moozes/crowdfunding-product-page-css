import {Component} from 'react';
import ModalCard from './ModalCard';
import {ReactComponent as CloseModal} from '../images/icon-close-modal.svg'
// div.modal
//   img
//   h1
//   p
//   map -> <ModalCard>
//     .top
//       .left
//         input:radio
//       .right
//         .header
//           h3
//           h3
//           h3
//         p
//     .bottom
//       span
//       input:text
//       button

const PRODUCTS = [
    {
        title : "Pledge with no reward",
        price : null,
        discription : "  Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
        left : null,
    },
    {
        title : "Bamboo Stand",
        price : "25",
        discription : "  You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
        left : "101",
    },
    {
        title : "Black Edition Stand",
        price : "75",
        discription : "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left : "64",
    },
    {
        title : "Mahogany Special Edition",
        price : "200",
        discription : "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
        left : "0",
    }
]

export default class Modal extends Component {
    state = {
        selectedRadio : 0
    }

    radioSelection = (value) => {
        this.setState({
            selectedRadio : value
        })
    }

    handleClick = (e) => { 
        // to prevent onClick event to propagate to the parent "modal-outer"
        e.stopPropagation();
    }
    render() {
        return(
            <div className="modal-outer"
                onClick={this.props.removeModal}
            >
                <div className="modal card"
                    onClick={this.handleClick}
                >
                    <CloseModal
                        onClick={this.props.removeModal}
                    />
                    <h2>Back this project</h2>
                    <p>  Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                    {PRODUCTS.map((elm, index) => (
                        <ModalCard 
                            info={elm} 
                            key={index} 
                            value={index} 
                            selectedRadio={this.state.selectedRadio}
                            radioSelection={this.radioSelection}
                            showModalCompleted={() => {this.props.removeModal();this.props.showModalCompleted()}}
                        />
                    ))}
                </div>
            </div>);
    }
}