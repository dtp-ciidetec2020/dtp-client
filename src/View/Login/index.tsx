import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { LoginContainer, BackgroundLogo, Form, FormContainer } from './styled';
import CidetecBackground from '../../images/bannerCidetec.png';
import { useResize } from '../../helpers/hooks';
import { Big } from '../../theme/spacing';
import CustomButton from '../../components/CustomButton';

type InputType = {
  name: string;
};

const inputs: Array<InputType> = [{ name: 'username' }, { name: 'password' }];

const Login = () => {
  const { windowDimensions } = useResize();
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
          <Form>
            <Typography>Welcome</Typography>
            {inputs.map(({ name }) => (
              <TextField
                style={{ marginTop: Big }}
                key={name}
                id={name}
                fullWidth
                label={name}
                variant="outlined"
              />
            ))}
            <CustomButton
              label="Log In"
              handleClick={() => console.log('click')}
            />
          </Form>
        </FormContainer>
      </Grid>
    </LoginContainer>
  );
};

export default Login;
