import {Component} from 'react';
import logo from '../images/logo-mastercraft.svg';
import {ReactComponent as Bookmark} from '../images/icon-bookmark.svg';

export default class FirstCard extends Component {
    state = {
        bookmarked : false
    }

    handleBookmarking = () => {
        this.setState((prev) => ({
            bookmarked : !prev.bookmarked
        }))
    }

    render() {
        return(
        <div className="card">
            <img src={logo} alt="logo mastercraft" />
            <h2>Mastercraft Bamboo Monitor Riser</h2>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className="footer">
                <button 
                    className="btn-primary"
                    onClick={this.props.showModal}
                >Back this project</button>
                <div 
                    className={this.state.bookmarked ? "bookmark-container active": "bookmark-container"}
                    onClick={this.handleBookmarking}
                >
                    {/* <img src={bookmark} alt="bookmark" /> */}
                    <Bookmark/>
                    <span>{this.state.bookmarked? "Bookmarked": "Bookmark"}</span>
                </div>
            </div>
        </div>);
    }
}