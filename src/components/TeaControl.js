import React from "react";
import TeaList from "./TeaList";
import NewTeaForm from "./NewTeaForm";
import TeaDetail from "./TeaDetails";
import EditTealForm from "./EditTea";

class TeaControl extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      mainTeaList: [],
      formVisibleOnPage: false,
      selectedTea: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.setState.selectedTea != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTea: null,
        editing: false
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

  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList
    .filter(tea => tea.id !== this.state.selectedTea.id)
    .concat(teaToEdit);
    this.setState({
      mainTeaList: editedMainTeaList,
      editing: false,
      selectedTea: null
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;


    if (this.state.editing) {
      currentlyVisibleState = <EditTealForm
        tea = {this.state.selectedTea}
        onEditOrder = {this.handleEditingTeaInList} />
      buttonText = "Return to Tea List";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail 
        tea = {this.state.selectedTea} 
        onClickingEdit = {this.state.handleEditClick} />
        buttonText = "Return to Tea List"; 
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaOrder={this.handleAddingNewTeaToList} />
      buttonText = "Return to Tea List"
    } else {
      currentlyVisibleState = <TeaList teaList={this.state.mainTeaList} onTeaSelection = {this.handleChangeSelectedTea} />
      buttonText="Add Tea";
    }

    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    )
  }
}

export default TeaControl;