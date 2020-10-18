import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import InputService from './service';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const {
    handleInputBlur, handleInputFocus, isFocus, isFilled, defaultValue, inputRef, error,
  } = InputService(rest.name);
  return (
    <Container isFocus={isFocus} isFilled={isFilled}>
      { Icon && <Icon /> }
      <input
        defaultValue={defaultValue}
        {...rest}
        ref={inputRef}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
      />
      { error }
    </Container>
  );
};
export default Input;
