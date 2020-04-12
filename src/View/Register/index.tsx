import React, { useState } from 'react';
import { Typography, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ParticlesContainer, RegisterContainer, SignText } from './styled';
import Form from '../../components/Form';
import { InputType } from '../Login';
import { Big, Medium, Small } from '../../theme/spacing';
import CustomButton from '../../components/CustomButton';
import { useResize } from '../../helpers/hooks';
import { Caller } from '../../api/request';

const inputs: Array<InputType> = [
  { name: 'username' },
  { name: 'password', type: 'password' },
  { name: 'email' },
  { name: 'First Name' },
  { name: 'Last Name' },
];

const Register = () => {
  const { push } = useHistory();
  const { windowDimensions } = useResize();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: '',
    'First Name': '',
    'Last Name': '',
  });
  const handleChange = (value: string, option: string) => {
    setCredentials((prev) => ({ ...prev, [option]: value }));
  };

  const register = () => {
    Caller({
      api: 'posts/1',
      method: 'get',
      callback: (data: any) => console.log(data),
    });
  };
  return (
    <RegisterContainer>
      <ParticlesContainer
        params={{
          particles: {
            number: {
              value: windowDimensions.width <= 960 ? 50 : 200,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
      <Form
        height="60%"
        width={windowDimensions.width <= 960 ? '80%' : '40%'}
        elevation={5}
        handleEnterPress={() => register()}
      >
        <Typography variant="h5">Register</Typography>
        {inputs.map(({ name, type = 'string' }) => (
          <TextField
            key={name}
            style={{ marginTop: Big }}
            fullWidth
            label={name}
            type={type}
            variant="outlined"
            onChange={(e) => handleChange(e.target.value, name)}
          />
        ))}
        <CustomButton
          label="Register"
          fullWidth
          margin={`${Big} 0px ${Small} 0px`}
          handleClick={() => register()}
          type="primary"
          padding={`${Medium}`}
        />
        <Typography>
          Already have an account?{' '}
          <SignText onClick={() => push('/login')}>Sign</SignText>
        </Typography>
      </Form>
    </RegisterContainer>
  );
};

export default Register;
