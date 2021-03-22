import styled from 'styled-components'

export const HoursStyled = styled.div`
 --rotation: 0;
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 10px;
  height: 22%;
  background-color: black;
  transform-origin: bottom;
  transform: translate(-50%) rotate(calc(var(--rotation) * 1deg));
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  
  background-color: black;
`