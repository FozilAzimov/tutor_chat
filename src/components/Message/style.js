import { styled } from "styled-components";

import { ReactComponent as arrow } from "../../assets/icons/arrow_prewiev.svg";

const Icons = styled.div``;

Icons.Arrow = styled(arrow)`
width: 20px;
height: 20px;
cursor: pointer;
`;

const Wrapper = styled.div`
width: 100%;
margin-top: 25px;
`

const Container = styled.div`
padding: 0 27px;
`

const getMargin = ({ type }) => {
  switch (type) {
    case 'top': return '80px';
    default: return '0';
  }
}

const TitleWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: ${getMargin};
`

const Title = styled.div`
text-align: center;
width: 100%;
font-size: 20px;
font-weight: 500;
font-family: 'Inter', sans-serif;
`

const MessageBox = styled.div`
width: 100%;
font-size: 20px;
font-weight: 500;
font-family: 'Inter', sans-serif;
display: flex;
flex-direction: column;
align-items: center;
font-size: 12px;
font-weight: 400;
color: #8C8C8C;
`

const MessageContent = styled.div`
width: 100%;
padding: 10px 15px;
margin: 15px auto 50px auto;
box-shadow: 0px 4px 4px 0px #00000040;
border-radius: 10px;
`

const getType = ({ type }) => {
  switch (type) {
    case 'bold': return {
      fontSize: '13px',
      fontWeight: '600',
      color: '#323232',
      marginBottom: '10px'
    };
    default: return {
      fontSize: '15px',
      fontWeight: '300',
      color: '#000'
    }
  }
}

const Messages = styled.div`
${getType}
`

const Link = styled.div`
width: 100%;
text-align: center;
color: #347AE2;
font-size: 16px;
font-weight: 400;
margin-top: 20px;
cursor: pointer;
`




export {
  Wrapper,
  Icons,
  Container,
  TitleWrapper,
  Title,
  MessageBox,
  MessageContent,
  Messages,
  Link
}