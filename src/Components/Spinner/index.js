import styled, { css, keyframes } from 'styled-components'

const rotateFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const rotate = () => css`
  animation: 1.5s ${rotateFrames} linear infinite;
`

export const Spinner = styled.div`
  ${rotate()}
  border:2px solid violet;
  border-right: 2px solid transparent;
  border-radius: 50%;
  height:40px;
  margin-bottom: 10px;
  margin-left: calc(50% - 40px);
  width:40px;
  z-index: 10;
`

export const MiniSpinner = styled.div`
  ${rotate()}
  float: right;
  border:2px solid #fff;
  border-right: 2px solid transparent;
  border-radius: 50%;
  height: 20px;
  width:20px;
  z-index: 10;
  /* position: absolute; */
  right: 10px;
  /* margin-top: -15px; */
`
