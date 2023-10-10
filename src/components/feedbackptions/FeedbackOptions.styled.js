import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-right: 10px;
  border-radius: 15px;
  margin-top: 14px;
  text-transform: uppercase;
  font-weight: 700;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
