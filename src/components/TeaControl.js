import React from "react";
import TeaList from "./TeaList";
import NewTeaForm from "./NewTeaForm";

class TeaControl extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      mainTeaList: [],
      formVisibleOnPage: false
    }
  }

  handleClick = () => {
    this.setState(pervState => ({
      formVisibleOnPage: !pervState.formVisibleOnPage
    }));
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({mainTeaList: newMainTeaList,
      formVisibleOnPage: false});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let button = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaOrder={this.handleAddingNewTeaToList} />
    } else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList} />
      buttonText="Add Tea";
      button = <button onClick={this.handleClick}>{buttonText}</button>
    }

    return (
      <>
        {currentlyVisibleState}
        {button}
      </>
    )
  }
}

export default TeaControl;