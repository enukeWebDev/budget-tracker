import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';



const Toggle = styled.div`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top:-70px;
  margin-left:auto;
  border: none;
  background-color: ${props => props.theme.titleColor};
  color: ${props => props.theme.pageBackground};
  &:focus{
    outline: none;
  }
  transition: all .5s ease;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  
`;

function DarkLightMode(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    }
    else {
      props.setTheme("light");
    }
  };


  const icon = props.theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  return (

    <Container className="example">
      {props.children}
      <Toggle onClick={changeTheme}>
        {icon}
      </Toggle>
    </Container>

  );

};

export default DarkLightMode;