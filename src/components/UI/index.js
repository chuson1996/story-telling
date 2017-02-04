import styled from 'styled-components';

export const MagicSpanContainer = styled.span`
  display: inline-block;
  overflow-y: hidden;
  height: 25px;
`;

export const MagicSpan = styled.span`
  display: inline-block;
  height: 25px;
  transform: translate(0px, ${({ y }) => y}px)
`;

export const MagicTextContainer = styled.div`
  background-color: rgb(241, 228, 117);
  display: inline-block;
  overflow: hidden;
`;

export const MagicText = styled.h1`
  margin: 0;
  transform: translate(${({ show }) => show ? '0' : '100%'}, 0px);
  transition: transform 1.5s;
  background-color: ivory;
`;
