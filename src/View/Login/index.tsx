import React, { useState } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { LoginContainer, BackgroundLogo, FormContainer } from './styled';
import CidetecBackground from '../../images/bannerCidetec.png';
import { useResize } from '../../helpers/hooks';
import { Big, Medium } from '../../theme/spacing';
import CustomButton from '../../components/CustomButton';
import { Caller } from '../../api/request';
import Animate from '../../components/Animate';
import Form from '../../components/Form';

export type InputType = {
  name: string;
  type?: string;
};

const inputs: Array<InputType> = [{ name: 'username' }, { name: 'password', type: 'password' }];

const Login = () => {
  const { windowDimensions } = useResize();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (value: string, option: string) => {
    setCredentials((prev) => ({ ...prev, [option]: value }));
  };

  const login = () => {
    Caller({
      api: 'posts/1',
      method: 'get',
      callback: (data: any) => console.log(data),
    });
  };

  return (
    <LoginContainer
      container
      justify="center"
      direction="row"
      alignContent={windowDimensions.width <= 960 ? 'flex-start' : 'center'}
    >
      <Grid item md={6} xs={12}>
        <BackgroundLogo>
          <img src={CidetecBackground} alt="Cidetec" width="80%" />
        </BackgroundLogo>
      </Grid>
      <Grid item md={6} xs={12}>
        <FormContainer>
          <Animate
            animationProps={{
              animation: 'FadeInFwd',
              duration: '.3s',
              width: '80%',
            }}
          >
            <Form
              width="80%"
              height="100%"
              elevation={5}
              handleEnterPress={() => login()}
            >
              <Typography variant="h5">Welcome</Typography>
              {inputs.map(({ name, type = 'string' }) => (
                <TextField
                  style={{ marginTop: Big }}
                  key={name}
                  id={name}
                  onChange={(e) => handleChange(e.target.value, name)}
                  fullWidth
                  label={name}
                  type={type}
                  variant="outlined"
                />
              ))}
              <CustomButton
                label="Log In"
                fullWidth
                type="primary"
                dissabled={
                  credentials.username === '' || credentials.password === ''
                }
                margin={`${Big} 0px 0px 0px`}
                handleClick={() => login()}
                padding={`${Medium}`}
              />
            </Form>
          </Animate>
        </FormContainer>
      </Grid>
    </LoginContainer>
  );
};

export default Login;
