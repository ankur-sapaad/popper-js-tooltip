import styled from "styled-components";

const ButtonStyled = styled.button`
  background: #000;
  padding: 15px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-family: sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
`;

const TooltipStyled = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 5px;
  text-align: left;
  position: relative;
  font-size: 0.8rem;
  visibility: hidden;
  color: #333;

  &[data-show="true"] {
    visibility: visible;
  }
`;

export { ButtonStyled, TooltipStyled };
