 import styled from '@emotion/styled';

 export const Input = styled.input`
width: 80%;
padding: 5px;
margin-right: 10px;
border-radius: 4px;
border: 1px solid black;
&:valid{
    border: 1px solid green;
}
&:invalid{
    border: 1px solid orrange;
}`