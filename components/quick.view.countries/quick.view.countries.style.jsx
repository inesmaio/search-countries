import styled from "styled-components"

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`
export const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 20px;
`
export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  border-radius: 20px;

  color: #011936;
  background: #ffffff;
  box-shadow:  7px 7px 14px #c2c2c2,
               -7px -7px 14px #ffffff;
  padding: 20px;
  width: 600px;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 20px 0;
  width: 50%;
  & p {
    margin: 0;
    line-height: 20px;
  }
`
export const Flags = styled.img`
    margin: 4px;
    box-shadow: 2px 2px 4px;
    border-radius: 4px;
`
export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin: 0;
  color: #c16f5c;
`
