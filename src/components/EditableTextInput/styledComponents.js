import styled from 'styled-components/macro'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

export const TextInputContainer = styled.div`
  min-height: 200px;
  width: 400px;
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
`

export const MainHeading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`

export const InputElement = styled.input`
  height: 40px;
  width: 250px;
  border: 1px solid #cbd2d9;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 20px;
`

export const ButtonElement = styled.button`
  background-color: #d946ef;
  height: 40px;
  font-family: 'Roboto';
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 12px;
  width: 70px;
  border-radius: 4px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const InlineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
`
