import React from "react";
import TeaList from "./TeaList";
import NewTeaForm from "./NewTeaForm";
import TeaDetail from "./TeaDetails";
import EditTeaForm from "./EditTea";

class TeaControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedTea: null,
      editing: false,
      mainTeaList: []
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
      this.setState(pervState => ({
        formVisibleOnPage: !pervState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing : true});
  }

  handleAddingNewTeaToList = (newTea) => {
    const newMainTeaList = this.state.mainTeaList.concat(newTea);
    this.setState({
      mainTeaList: newMainTeaList,
      formVisibleOnPage: false
    });
  }

  handleChangeSelectedTea = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    this.setState ({ selectedTea: selectedTea });
  }

  handleEditingTeaInList = (teaToEdit) => {
    const editedMainTeaList = this.state.mainTeaList
    .filter(tea => tea.id !== this.state.selectedTea.id)
    .concat(teaToEdit);
    this.setState({
      mainTeaList: editedMainTeaList,
      editing: false,
      selectedTea: null
    });
  }

  handleDeleteTea = (id) => {
    const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !==id);
    this.setState({
      mainTeaList: newMainTeaList,
      selectedTea: null
    })
  }

  handleTeaSale = (id) => {
    const selectedTea = this.state.mainTeaList.filter(tea => tea.id === id)[0];
    console.log(id)
    if (selectedTea.available >=1) {
      const soldTea = { ...selectedTea, available: selectedTea.available -1};
      const newMainTeaList = this.state.mainTeaList.filter(tea => tea.id !== id).concat(soldTea);
      this.setState({
        mainTeaList: newMainTeaList
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTeaForm
        tea = {this.state.selectedTea}
        onEditOrder = {this.handleEditingTeaInList} />
      buttonText = "Return to Tea List";
    } else if (this.state.selectedTea != null) {
      currentlyVisibleState = <TeaDetail 
        tea = {this.state.selectedTea} 
        onClickingEdit = {this.handleEditClick} 
        onClickingDelete = {this.handleDeleteTea}/>
        buttonText = "Return to Tea List"; 
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTeaForm onNewTeaOrder={this.handleAddingNewTeaToList} />
      buttonText = "Return to Tea List"
    } else {
      currentlyVisibleState = <TeaList 
        teaList = {this.state.mainTeaList} 
        onTeaSelection = {this.handleChangeSelectedTea} 
        onSellTeaClicked = {this.handleTeaSale}/>
        buttonText = "Add Tea";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default TeaControl;