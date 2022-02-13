  import styled from '@emotion/styled';

  export const Container = styled.div`
display: block;
padding: 15px;
margin: 0 auto;
`;
export const FormBox = styled.form`
display: block;
padding: 10px;
margin: 0 auto;
`;
export const Label = styled.label`
display: inline-block;
// margin: 0 auto;
`;
export const Input = styled.input`
width: 80%;
padding: 5px;
margin-right: 10px;
border-radius: 4px;
border: 1px solid black;
`
export const Button = styled.button`
  font-family: 'Roman';
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  padding: 6px 22px;
  &:hover,
  &:focus {
    background: #a7f542;
  }
`;
