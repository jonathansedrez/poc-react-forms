import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/input/input';

interface CredentialProps {
  email: string;
  password: string;
}

const Credentials = () => {
  const { handleSubmit, register, formState } = useForm<CredentialProps>({
    mode: 'onChange',
  });

  const onSubmit = (data: CredentialProps) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Credentials</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="ex: jhon@doe.com"
          ref={register({ required: true })}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />

        <button disabled={!formState.isValid}>Proximo</button>
      </form>
    </div>
  );
};

export default Credentials;
