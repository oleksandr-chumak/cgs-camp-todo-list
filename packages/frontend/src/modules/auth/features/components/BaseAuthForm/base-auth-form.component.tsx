import React, { useMemo } from 'react';
import { FormikValues, useFormik } from 'formik';
import * as Styled from './base-auth-form.styled';
import { BaseAuthFormProps, BaseAuthInputProps } from '../../types/form.type';
import { Button } from '../../../../common/components/UI/Button/button.styled';
import BaseAuthInput from '../BaseAuthInput/base-auth-input';
import { capitalizeWords } from '../../utils/capitalize-words';

const BaseAuthForm = <T extends FormikValues>({
  title,
  submitButtonText,
  validationSchema,
  redirectUrl,
  redirectName,
  isModal,
  onSubmit
}: BaseAuthFormProps<T>) => {
  const initialValues = useMemo<T>(() => {
    const values: Record<string, string> = {};
    for (const key in validationSchema.fields) {
      if (validationSchema.fields.hasOwnProperty(key)) {
        values[key] = '';
      }
    }
    return values as T;
  }, []);

  const formik = useFormik<T>({
    initialValues,
    validationSchema,
    onSubmit
  });

  const isError = (name: string): boolean => !!(formik.touched[name] && formik.errors[name]);

  const fieldPropsByName = (name: string): BaseAuthInputProps => {
    const error: string | undefined = formik.errors[name] as string | undefined;
    const identifier: string = name as string;

    return {
      id: identifier,
      name: identifier,
      error,
      isError,
      placeholder: capitalizeWords(name),
      onChange: formik.handleChange,
      value: formik.values.name
    };
  };

  const formikValueKeys: string[] = Object.keys(formik.values);

  const Form = isModal ? Styled.ModalForm : Styled.BaseForm;
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Styled.BaseFormHeader>{title}</Styled.BaseFormHeader>
      {formikValueKeys.map((key, index) => (
        <BaseAuthInput key={`${index}-form-field`} {...fieldPropsByName(key)} />
      ))}
      {redirectUrl && (
        <Styled.BaseFormRedirect to={redirectUrl}>{redirectName}</Styled.BaseFormRedirect>
      )}
      <Button type="submit">{submitButtonText}</Button>
    </Form>
  );
};

export default BaseAuthForm;
