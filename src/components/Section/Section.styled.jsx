import { styled } from 'styled-components';

export const SectionWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding-top: 8px;
  padding-bottom: 8px;

  max-width: 100%;
  width: 700px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Title = styled.h1`
  padding-top: 4px;
  padding-bottom: 4px;

  text-transform: uppercase;
  text-align: center;
  color: #008080;
  font-size: 32px;

  text-shadow: 1px 1px 1px #d1c4c4;
`;
