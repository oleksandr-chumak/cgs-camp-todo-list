import React, { FC } from 'react';
import { BaseAuthInputProps } from '../../types/form.type';
import { Input } from '../../../../common/components/UI/Field/input';

const BaseAuthInput: FC<BaseAuthInputProps> = ({ isError, name, error, ...fieldProps }) => (
  <Input error={isError(name) ? error : undefined} {...fieldProps} />
);

export default BaseAuthInput;
