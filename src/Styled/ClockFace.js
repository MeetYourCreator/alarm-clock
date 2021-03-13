import styled from 'styled-components'

export const ClockFace = styled.div`
  width: 500px;
  height: 500px;
  background-color: rgba(102, 193, 230, 0.485);
  border-radius: 50%;
  border: 3px solid black;
  position: skewY(40deg);
  transform: skewX(50deg);
`