"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React, { InputHTMLAttributes, useState } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  className?: string;
  fullWidth?: boolean;
  register: any;
  errors: any;
}

const InputField = ({
  name,
  type,
  register,
  label = null,
  errors = null,
  required = false,
  fullWidth = false,
  disabled = false,
  defaultValue = null,
  readOnly = false,
  ...rest
}: InputProps) => {
  const errorField = errors?.[name];
  const [showPassword, setShowPassword] = useState(
    name?.toLowerCase().includes("password") ? false : true
  );
  const [toggle, setToggle] = useState(false);
  const togglePassword = () => {
    setToggle(!toggle);
    setShowPassword(!showPassword);
  };
  return (
    <FormControl
      sx={{ m: 1 }}
      variant="outlined"
      fullWidth={fullWidth}
      disabled={disabled}
      size="small"
    >
      <p
        className={`
         text-light-mode
        text-sm py-1 pl-1`}
      >
        {label}
      </p>
      <OutlinedInput
        error={!!errorField?.message}
        {...register(name, {
          valueAsNumber: type === "number" ? true : false,
        })}
        id={name}
        type={showPassword ? (type === "password" ? "text" : type) : "password"}
        className={`md:text-base border-2  text-light-mode bg-gray items-center justify-center rounded-xl`}
        fullWidth={fullWidth}
        required={required}
        defaultValue={defaultValue}
        readOnly={readOnly}
        placeholder={label}
        endAdornment={
          type === "password" && (
            <InputAdornment position="end">
              <IconButton
                onClick={togglePassword}
                onMouseDown={togglePassword}
                edge="end"
              >
                {!showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        {...rest}
      />
      {!!errorField?.message && (
        <FormHelperText id={name} variant="standard" error>
          {errorField.message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
