import styled from 'styled-components';

export const AddContactsFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

export const AddContactsInput = styled.input`
  width: 100%;
  padding: 20px 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 35px;
  font-weight: 400;
  border-radius: 50px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 150px;
  margin: 0;
  padding: 20px 25px;
  font-size: 35px;
  font-weight: 400;
  border-radius: 50px;
  background-color: #d55448;
  color: black;
  &:hover {
    background-color: #ffa577;
  }
`;

export const ButtonText = styled.p`
  margin: 0;
`;

export const Formlabel = styled.label`
  text-align: left;
  font-size: 35px;
  font-weight: 400;
`;
