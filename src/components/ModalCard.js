import {Component} from 'react';

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


export default class ModalCard extends Component {
    

    render() {
        console.log(this.props.selectedRadio);
        return(<div className={this.props.selectedRadio === this.props.value ? "modal-card selected" : "modal-card" }>
            <div className="top">
                <div className="left">
                    {this.props.info.left !== "0" && (
                        <input 
                            type="radio" 
                            name="support" 
                            value={this.props.value}
                            checked={this.props.selectedRadio === this.props.value}
                            onChange={() => {this.props.radioSelection(this.props.value)}}
                        />
                    )}
                    
                </div>
                <div className="right">
                    <div className="header">
                        <h3
                            onClick={this.props.value !== 3 ? (() => this.props.radioSelection(this.props.value)) : () => {}}
                        >{this.props.info.title}</h3>
                        {this.props.info.price && (
                            <h3 className="price">Pledge ${this.props.info.price} or more</h3>
                        )}
                        {this.props.info.left && (
                            <h3 className="left-number">{this.props.info.left} <span className="left-text">left </span></h3>
                        )}
                        
                    </div>
                    <p>{this.props.info.discription}</p>
                    {this.props.selectedRadio === this.props.value && (
                        <div className="bottom">
                            <span>Enter your pledge</span>
                            <input type="text" placeholder={this.props.info.price}/>
                            <button 
                                className="btn-primary"
                                onClick={this.props.showModalCompleted}
                            >Continue</button>
                        </div>
                    )}
                </div>
            </div>
            
        </div>);
    }
}