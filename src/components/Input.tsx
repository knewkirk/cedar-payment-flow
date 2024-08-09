import Alert from '@/icons/Alert';
import Check from '@/icons/Check';
import { HTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError, RegisterOptions, useFormContext } from 'react-hook-form';

interface Props {
  className?: string;
  label: string;
  name: string;
  type: InputHTMLAttributes<'text'>['type'];
  options: RegisterOptions;
  placeholder: string;
}

const ERROR_MESSAGE: Partial<Record<FieldError['type'], string>> = {
  required: 'This field is required',
  maxLength: 'Too long',
  minLength: 'Too short',
  pattern: 'Must match pattern',
};

// const getErrorMessage = (type: FieldError['type']) => {
//   switch (type) {
//     case 'required':
//       return 'This field is required';
//     case
//   }
// };

export default function Input({
  label,
  name,
  type,
  className,
  options,
  placeholder,
}: Props) {
  const {
    register,
    formState: { errors, dirtyFields },
  } = useFormContext();
  return (
    <div className={className}>
      <label
        htmlFor="name"
        className="mb-2 text-textSecondary font-bold text-sm"
      >
        {label}
      </label>
      <div className="relative">
        <input
          placeholder={placeholder}
          id={name}
          type={type}
          className={`
        ${errors[name] ? 'border-red' : 'border-textSecondary'}
        rounded-lg border py-3 px-4 w-full`}
          {...register(name, options)}
        />
        {errors[name] && <Alert className="absolute top-3 right-3" />}
        {!errors[name] && dirtyFields[name] && (
          <Check className="absolute top-3 right-3" />
        )}
      </div>
      {errors[name] && (
        <p
          className="text-red text-sm mt-2"
          role="alert"
        >
          {ERROR_MESSAGE[errors[name].type as FieldError['type']]}
        </p>
      )}
    </div>
  );
}
