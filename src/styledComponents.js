import styled from "styled-components";

export const TextEditor = styled.textarea`
  height: 70vh;
  background-color: #64656b;
  border: none;
  border-top: 2px solid #334155;
  width: 30vw;
  outline: none;
  border-radius: 20px;
  border: none;
  padding: 15px;
  margin: 30px;
  text-decoration: ${props => (props.isunderline ? 'underline' : 'normal')};
  font-style: ${props => (props.isitalic ? 'italic' : 'normal')};
  font-weight: ${props => (props.isbold ? 'bold' : 'normal')};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-family: ${(props) => props.fontStyle};
  text-align: ${(props) => props.alignment};
`;
export const TextEditorController = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 70vh;
  width: 40vw;
`;
export const InnerUpperContainer = styled.div`
  justify-content: flex-start;
  align-items: center;
  width: 200px;
  margin-top: 0px;
  margin-bottom: 20px;
`;

export const FontSizeEditContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FontColorContainer = styled(FontSizeEditContainer)`
  margin-left: 30px;
`

export const LabelElement = styled.p`
  font-size: 12px;
  margin: 0px;
  margin-bottom: 3px;
  color: white;
  font-family: "Helvetica";
`;

export const FontInput = styled.input`
  outline: none;
  height: 25px;
  width: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3px;
  background-color: #f0ebeb;
  border: none;
`;

export const FontColorInput = styled(FontInput)`
  height: 31px;
  width: 90px;
  padding: 5px;
`

export const InnerMiddleContainer = styled(InnerUpperContainer)`
  display: flex;
  flex-direction: row;
  margin: 25px 0px;
`
export const InnerLowerContainer = styled(InnerUpperContainer)``

export const BoldButton = styled.button`
  background-color: transparent;
  border: none;
  margin: none;
  cursor: pointer;
  color: ${props => props.color};
`
export const ItalicButton = styled(BoldButton)`
  margin: 0px 15px;
`
export const UnderlineButton = styled(BoldButton)`
`
export const Button = styled(BoldButton)`
  margin: 0px;
`