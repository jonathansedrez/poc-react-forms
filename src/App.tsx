import React from 'react';

import { useForm } from 'react-hook-form';
import { Input } from './components/input/input';

interface Credentials {
  email: string;
  password: string;
}

const App = () => {
  const { handleSubmit, register, formState } = useForm<Credentials>({
    mode: 'onChange',
  });

  const onSubmit = (data: Credentials) => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="ex: jhon@doe.com"
          ref={register({ required: true })}
          errorMessage="Mensagem padrão"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({ required: true })}
        />

        <button disabled={!formState.isValid}>Proximo</button>
      </form>
    </main>
  );
};

export default App;
