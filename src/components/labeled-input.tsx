import { ComponentProps, FC, ReactNode, useId } from 'react';
import { Input } from './input';
import { Label } from './label';

type InputProps = ComponentProps<typeof Input>;

type Props = {
  children: ReactNode;
} & InputProps;

export const LabeledInput: FC<Props> = ({ children, ...props }) => {


  return (
    <div>
      <Label>{children}</Label>
      <Input {...props} />
    </div>
  );
};
