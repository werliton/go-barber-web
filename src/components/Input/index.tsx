import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes, useCallback, useEffect, useRef, useState,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon?: React.ComponentType<IconBaseProps>
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(rest.name);

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

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
    </Container>
  );
};
export default Input;
