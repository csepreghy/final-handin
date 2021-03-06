import React, {Component} from 'react';

var timeout1;
var timeout2;
var timeout3;

class PreLoader extends Component {

  constructor(props) {
    super();

    this.state = {
      currentLoadingLabel: "Moving satelites into position",
      loadingLabels: [
        "Moving satelites into position",
        "Bits are moving slowly today",
        "Committing latest changes",
        "Reading browser history"
      ],
      indexOfLabel: 0,
      opacity: 1,
      saveModalDisplay: "none",
      modalTitle: "Please, be patient!",
      modalText: "Patience is a virtue!",
      disableClickingDisplay: "none"
    }

    this.toggleLoginLabels = this.toggleLoginLabels.bind(this);
    this.changeModalText = this.changeModalText.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.disableClicking = this.disableClicking.bind(this);
  }

  componentDidMount() {
    this.toggleLoginLabels();
  };

  changeModalText() {
    console.log("change");
    this.setState({ modalTitle: "Nope!",  modalText: "You have to say you are sorry!" })
  }

  closeModal() {
    this.setState({ saveModalDisplay: "none", modalTitle: "Please, be patient!", modalText: "Patience is a virtue!" });
  }

  disableClicking() {
    this.setState({ saveModalDisplay: "block" });
  }

  toggleLoginLabels() {
    this.setState({ disableClickingDisplay: "block" })
    if (this.state.indexOfLabel < 9) {
      timeout1 = setTimeout(() => {
        this.setState({
          currentLoadingLabel: this.state.loadingLabels[this.state.indexOfLabel],
          opacity: 1
        });
        timeout2 = setTimeout(() => {
          this.setState({ indexOfLabel: this.state.indexOfLabel + 1, opacity: 0 });
          timeout3 = setTimeout(() => {
            this.setState({ opacity: 0 }); 
            this.toggleLoginLabels();
          }, 0);
        }, 2500);
      }, 400);
    }
  }

  componentWillUnmount() {
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
  }

  render() {
    return (
      <section className="login-page content">
        <div onClick={ this.disableClicking } className="disable" style={{ display: this.state.disableClickingDisplay }}></div>
        <div id="loader-modal" style={{ "display": this.state.saveModalDisplay }}>
          <div onClick={ this.changeModalText } className="modal-background"></div>
          <div className="modal">
            <div className="modal-content">
              <h4>{ this.state.modalTitle }</h4>
              <p>{ this.state.modalText }</p>
            </div>
            <div className="modal-footer">
              <button onClick={ this.closeModal } className="modal-action modal-close waves-effect waves-green btn-flat">I'm sorry</button>
            </div>
          </div>
        </div>
        <div className="login-container card card-3">
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
            <div className="spinner-layer spinner-red">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
            <div className="spinner-layer spinner-yellow">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
            <div className="spinner-layer spinner-green">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div>
            <p className="login-label" style={{ opacity: this.state.opacity }}>{ this.state.currentLoadingLabel }</p>
            <p>Be patient, this could take a while</p>
          </div>
        </div>
      </section>
    );
  }
}
export default PreLoader;