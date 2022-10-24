import React,{FunctionComponent} from "react";
import styled from '@emotion/styled';
import ProfileImage from "components/Main/ProfileImage";


const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg,#29323c 0%, #485563 100%);
  color: #ffffff;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  width: 768px;
  height: 300px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

const SubTtile = styled.h4`
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`
const Title = styled.h2`
  margin-top:5px;
  font-size: 35px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`


const Introduction:FunctionComponent = function () {
    return(
        <Background>
            <Wrapper>
                <ProfileImage />
                    <div>
                        <SubTtile>Nice to Meet you</SubTtile>
                        <Title> I`m Junior Frontend Developer seonghoon</Title>
                    </div>
            </Wrapper>
        </Background>
    )
}
export default  Introduction;