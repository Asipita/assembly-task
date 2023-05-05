import styled from "styled-components";

export const Input = styled.input`
  max-width: 600px;
  width: 80%;
  background-color: rgba(255, 255, 255, 0.19);
  height: 72px;
  border-radius: 10px;
  padding: 2rem;
  color: #0f2027;
  outline: none;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #bcbcbc;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #bcbcbc;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #bcbcbc;
  }
`;
