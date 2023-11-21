import * as Yup from 'yup';
import { AnyObject, Maybe } from 'yup';
import { ChangeEvent } from 'react';

type ExcludeUndefined<T> = {
  [K in keyof T]: Exclude<T[K], undefined>;
};

export interface BaseAuthFormProps<T extends Maybe<AnyObject>> {
  title: string;
  submitButtonText: string;
  redirectUrl?: string;
  redirectName?: string;
  validationSchema: Yup.ObjectSchema<T>;
  isModal?: boolean;
  onSubmit: (values: ExcludeUndefined<T>) => void;
}

export interface FormikFieldProps {
  id: string;
  name: string;
  error: string | undefined;
  onChange: (e: ChangeEvent) => void;
  value: string;
}

export interface BaseAuthInputProps extends FormikFieldProps {
  isError: (name: string) => boolean;
  placeholder: string;
}

export interface BaseFormProps {
  $modal: boolean | undefined;
}
