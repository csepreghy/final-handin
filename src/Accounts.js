import React, {Component} from 'react';

class Accounts extends Component {

  constructor(props) {
    super();

    this.state = {
      names: [
        "Sam Harris",
        "Steve Jobs",
        "Gizi Néni",
        "Elon Musk"
      ],
      imgs: [
        "assets/sam.jpg",
        "assets/steve.jpg",
        "assets/wat.jpg",
        "assets/elon.jpg"
      ],
      emails: [
        "samharris@gmail.com",
        "stevejobs@gmail.com",
        "gizineni@gmail.com",
        "elonmusk@gmail.com"
      ]
    }

    this.addAccount = this.addAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  addAccount() {
    let newNamesArray = this.state.names;
    newNamesArray.push("Beauty Queen");
    let newImgArray = this.state.imgs;
    newImgArray.push("assets/beauty.jpg");
    let newEmailArray = this.state.emails;
    newEmailArray.push("beautyqueen@xxx.com")

    this.setState({ names: newNamesArray, imgs: newImgArray, emails: newEmailArray });
  }

  deleteAccount(e) {
    let newNamesArray = this.state.names;
    newNamesArray.splice(e.target.id, 1)
    let newImgArray = this.state.imgs;
    newImgArray.splice(e.target.id, 1)
    let newEmailArray = this.state.emails;
    newEmailArray.splice(e.target.id, 1)

    this.setState({ names: newNamesArray, imgs: newImgArray, emails: newEmailArray });
  }

  render() {
    return (
      <section className="content" id="accounts">
        <div className="fixed-action-btn">
          <button onClick={ this.addAccount } className="btn-floating btn-large waves-effect waves-light z-depth-4"><i className="material-icons">add</i></button>
        </div>
        <ul className="collection">
          { 
            this.state.names.map((item, index) => {
              return (
                <li key={ index } className="collection-item avatar">
                  <img src={ this.state.imgs[index] } alt="" className="circle" />
                  <span className="title secondary">{ item }</span>
                  <p>{ this.state.emails[index] }</p>
                  <button onClick={ this.deleteAccount } className="btn-floating btn-large waves-effect waves-light secondary-content"><i id={ index } className="material-icons secondary">delete</i></button>
                </li>
              )
            }) 
          }
        </ul>
      </section>
    );
  };
}

export default Accounts;