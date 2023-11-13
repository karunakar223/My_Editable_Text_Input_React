import {Component} from 'react'

import {
  MainContainer,
  TextInputContainer,
  MainHeading,
  InputElement,
  ButtonElement,
  InlineContainer,
  Paragraph,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    text: '',
    isEditable: true,
  }

  onChangeIsEditableStatus = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  onChangeInputText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <TextInputContainer>
          <MainHeading>Editable Text Input</MainHeading>
          <InlineContainer>
            {isEditable ? (
              <InputElement
                onChange={this.onChangeInputText}
                value={text}
                type="text"
              />
            ) : (
              <Paragraph>{text}</Paragraph>
            )}

            {isEditable ? (
              <ButtonElement onClick={this.onChangeIsEditableStatus}>
                Save
              </ButtonElement>
            ) : (
              <ButtonElement onClick={this.onChangeIsEditableStatus}>
                Edit
              </ButtonElement>
            )}
          </InlineContainer>
        </TextInputContainer>
      </MainContainer>
    )
  }
}

export default EditableTextInput
