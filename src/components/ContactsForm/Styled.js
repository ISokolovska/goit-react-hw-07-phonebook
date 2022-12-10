import styled from 'styled-components';

export const AddContactsFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
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
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  font-size: 25px;
  font-weight: 400;
  border-radius: 50px;
  background-color: #1995ad;
  color: black;
  &:hover {
    background-color: #a1d6e2;
  }
`;
