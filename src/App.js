import {Component} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Modal from './components/Modal';
import ModalCompleted from './components/ModalCompleted';

  // app
  //   first card state = bookmarked

class  App extends Component {
  state = {
    showModal : false,
    showModalCompleted : false
  }

  showModal = () => {
    this.setState({showModal : true});
  }

  removeModal = () => {
    this.setState({showModal : false});
  }

  showModalCompleted = () => {
    this.setState({showModalCompleted : true});
  }

  removeModalCompleted = () => {
    this.setState({showModalCompleted : false});
  }

  render() {
    return (
      <div>
        <Header/>
        <Content
          showModal={this.showModal}
        />
        {this.state.showModal && (
          <Modal
            removeModal={this.removeModal}
            showModalCompleted={this.showModalCompleted}
          />
        )}
        {this.state.showModalCompleted && (
          <ModalCompleted
            removeModalCompleted={this.removeModalCompleted}
          />
        )}
      </div>
    );
  }
}

export default App;
