import React, { InputHTMLAttributes } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';
import InputService from './service';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const {
    handleInputBlur, handleInputFocus, isFocus, isFilled, defaultValue, inputRef, error,
  } = InputService(rest.name);
  return (
    <Container isFocus={isFocus} isFilled={isFilled} isError={!!error}>
      { Icon && <Icon /> }
      <input
        defaultValue={defaultValue}
        {...rest}
        ref={inputRef}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
      />
      <span>
        { error
        && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
        )}
      </span>
    </Container>
  );
};
export default Input;
