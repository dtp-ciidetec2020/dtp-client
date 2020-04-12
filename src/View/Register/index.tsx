import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { ParticlesContainer, RegisterContainer, SignText } from './styled';
import Form from '../../components/Form';
import { InputType } from '../Login';
import { Big, Medium, Small } from '../../theme/spacing';
import CustomButton from '../../components/CustomButton';
import { useResize } from '../../helpers/hooks';

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
        handleEnterPress={() => console.log('ye')}
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
          />
        ))}
        <CustomButton
          label="Register"
          fullWidth
          margin={`${Big} 0px ${Small} 0px`}
          handleClick={() => console.log('yei')}
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
