import React, { forwardRef, useState } from 'react';
import Lottie from 'lottie-react-web';

import eye from '../../assets/lottie/eye.lottie.json';
import { ReactComponent as IconError } from '../../assets/icons/error.svg';
import './input.css';

interface InputProps {
  name: string;
  placeholder?: string;
  type?: 'password' | 'text';
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { type = 'text', placeholder, name, errorMessage } = props;

  const [passwordVisible, setPasswordVisible] = useState(
    () => type === 'password'
  );

  return (
    <label className="input-wrapper">
      <input
        className={['input', errorMessage && '--input-wrapper-error'].join(' ')}
        id={name}
        ref={ref}
        name={name}
        type={type === 'password' && passwordVisible ? 'password' : 'text'}
        placeholder={placeholder}
      />
      {errorMessage && (
        <span className="input-error-wrapper">
          <IconError className="input-error-icon" />
          <p className="input-error-text">{errorMessage}</p>
        </span>
      )}
      {type === 'password' && (
        <button
          type="button"
          className="input-password"
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          <Lottie
            direction={passwordVisible ? -1 : 1}
            options={{
              animationData: eye,
              loop: false,
              autoplay: false,
            }}
          />
        </button>
      )}
    </label>
  );
});
