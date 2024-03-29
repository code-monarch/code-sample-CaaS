import * as React from "react";
import { joinClasses } from "@design-system/utils/join-classes";
import { useToggle } from "@hooks/useToggle";
import HidePasswordIcon from "@public/img/hide-password.svg";
import ShowPasswordIcon from "@public/img/show-password.svg";
import classes from "../../design/inputs.classes";

export interface IPasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  value?: string;
  width?: string;
  classstyle?: string;
}

const PasswordInput = React.forwardRef<
  React.ElementRef<"input">,
  IPasswordInputProps
>((props, ref) => {
  // This utility hook helps us  toggle the show and Hide password icon
  const [hidePassword, setHidePassword] = useToggle(true);
  return (
    <div className='relative w-full'>
      <input
        {...props}
        ref={ref}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        type={hidePassword ? "password" : "text"}
        className={joinClasses(
          classes.passwordInputBase,
          props.width,
          props.classstyle
        )}
      />
      <button
        type='button'
        className='absolute right-[17px] top-0 bottom-0'
        onClick={setHidePassword}
      >
        {hidePassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
      </button>
    </div>
  );
});

PasswordInput.displayName = "PasswordInput";
export default PasswordInput;
