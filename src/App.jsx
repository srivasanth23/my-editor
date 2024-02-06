import React, { Component} from "react";
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import { PiTextAlignLeftFill, PiTextAlignCenterFill, PiTextAlignRightFill} from "react-icons/pi";
import FontPicker from "font-picker-react";
import {
  TextEditor,
  TextEditorController,
  InnerUpperContainer,
  InnerMiddleContainer,
  LabelElement,
  FontSizeEditContainer,
  FontInput,
  FontColorContainer,
  FontColorInput,
  BoldButton,
  ItalicButton,
  UnderlineButton,
  InnerLowerContainer,
  Button
} from "./styledComponents.js";
import "./styles.css";

const alignmentConstants = {
  leftalign: 'start',
  rightalign: 'end',
  center: 'center',
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFontFamily: "Open Sans",
      userText: "",
      sfont: 16,
      color: "#000000",
      isBold: false,
      isItalic: false,
      isUnderline: false,
      alignment: alignmentConstants.leftalign,
    };
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickChangeItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  onClickChangeUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  onChangeText = (event) => {
    this.setState({ userText: event.target.value });
  };

  onIncreaseFontSize = () => {
    this.setState((prevState) => {
      return { sfont: prevState.sfont + 2 };
    });
  };

  onDecreaseFontSize = () => {
    this.setState((prevState) => {
      return {sfont: prevState.sfont - 2};
    });
  };

  onChangeValue = event => {
    this.setState({sfont: event.target.value})
  }

  onChangeColor = event => {
    this.setState({color: event.target.value})
  }

  activeLeftAlign = () => {
    this.setState({alignment: alignmentConstants.leftalign})
  }

  activeCenter = () => {
    this.setState({alignment: alignmentConstants.center})
  }

  activeRightAlign = () => {
    this.setState({alignment: alignmentConstants.rightalign})
  }

  render() {
    const { userText, sfont, color, isBold, isItalic, isUnderline, alignment } = this.state;
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    const leftalign = alignment === alignmentConstants.leftalign ? '#faff00' : '#f1f5f9'
    const center = alignment === alignmentConstants.center ? '#faff00' : '#f1f5f9'
    const rightalign = alignment === alignmentConstants.rightalign ? '#faff00' : '#f1f5f9'

    return (
      <div className="bg-container">
        <TextEditor
          draggable="true"
          type="textarea"
          onChange={this.onChangeText}
          placeholder="Type Here"
          value={userText}
          fontStyle={this.state.activeFontFamily}
          fontSize={sfont}
          color={color}
          isbold={isBold}
          isunderline={isUnderline}
          isitalic={isItalic}
          alignment={alignment}
        />
        <TextEditorController>
          <InnerUpperContainer>
              <BoldButton
                color={boldLogo}
                type="button"
                onClick={this.onClickBold}
                >
                    <VscBold size={25} isbold={isBold}/>
              </BoldButton>
              <ItalicButton
                color={italicLogo}
                type="button"
                onClick={this.onClickChangeItalic}
              >
                  <GoItalic size={25} isitalic={isItalic}/>
              </ItalicButton>
              <UnderlineButton
                color={underlineLogo}
                type="button"
                onClick={this.onClickChangeUnderline}
              >
                    <AiOutlineUnderline size={25} isunderline={isUnderline}/>
              </UnderlineButton>
            </InnerUpperContainer>
          <LabelElement>FONT STYLES</LabelElement>
          <FontPicker
            apiKey="AIzaSyCyWeBXSp1GS36NnBQQo_-y7QfC8KSjUbc"
            activeFontFamily={this.state.activeFontFamily}
            onChange={(nextFont) =>
              this.setState({
                activeFontFamily: nextFont.family,
              })
            }
          />
          <InnerMiddleContainer>
            <FontSizeEditContainer>
              <LabelElement>FONT SIZE</LabelElement>
              <FontInput type="number" value={sfont} onChange={this.onChangeValue}/>
            </FontSizeEditContainer>
            <FontColorContainer>
              <LabelElement>FONT COLOR</LabelElement>
              <FontColorInput type="color" value={color} onChange={this.onChangeColor}/>
            </FontColorContainer>
          </InnerMiddleContainer>
          <InnerLowerContainer>
            <Button color={leftalign} onClick={this.activeLeftAlign}>
                <PiTextAlignLeftFill size={25}/>
            </Button>
            <Button color={center} onClick={this.activeCenter}>
                <PiTextAlignCenterFill size={25}/>
            </Button>
            <Button color={rightalign} onClick={this.activeRightAlign}>
                <PiTextAlignRightFill size={25}/>
            </Button>
          </InnerLowerContainer>
        </TextEditorController>
      </div>
    );
  }
}

export default App;
