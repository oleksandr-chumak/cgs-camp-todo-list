import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { DetailedProps } from './detailed-props.type';

export type InputProps = DetailedProps<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>;

export type TextAreaProps = DetailedProps<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>;
