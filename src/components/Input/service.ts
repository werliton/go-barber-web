import { useField } from '@unform/core';
import {
  useCallback, useEffect, useRef, useState,
} from 'react';

interface Response{
    handleInputBlur: ()=>void;
    handleInputFocus: ()=>void;
    isFocus: boolean;
    isFilled: boolean;
    inputRef: React.RefObject<HTMLInputElement>;
    defaultValue: string,
    error: string | undefined
}

const InputService = (name: string): Response => {
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

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

  return {
    handleInputBlur, handleInputFocus, isFocus, isFilled, inputRef, defaultValue, error,
  };
};

export default InputService;
