import React from "react";
import TeaList from "./TeaList";
import NewTeaForm from "./NewTeaForm";
import TeaDetail from "./TeaDetails";

class TeaControl extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      mainTeaList: [],
      formVisibleOnPage: false,
      selectedTea: null
    }
  }

  handleClick = () => {
    if (this.setState.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !pervState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({
      mainTeaList: newMainTeaList,
      formVisibleOnPage: false
    });
  }

  handleChangeSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => vinyl.id === id)[0];
    this.setState ({selectedTea: selectedTea});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    let button = null;

    if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail 
        tea = {this.state.selectedTea} />
        buttonText = "Return to Tea List";
        button = <button onClick={this.handleClick}> {buttonText} </button>  
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaOrder={this.handleAddingNewTeaToList} />
      buttonText = "Return to Tea List"
    } else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList} onTeaSelection = {this.handleChangeSelectedTea} />
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