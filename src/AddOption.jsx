import React from "react";

class AddOption extends React.Component {
  state = { error: undefined };

  handleAddOption = event => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(prevState => ({ error }));

    if (!error) {
      event.target.elements.option.value = "";
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p className='option-form-error'>{this.state.error}</p>}
        <form
          className="add-option"
          onSubmit={this.handleAddOption}>
          <input className='add-option__input' autoComplete="off" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;
