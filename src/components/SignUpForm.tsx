"use client";

import { useRef, useState } from "react";
import FormField from "./FormField";
import Input from "./Input";
import Label from "./Label";
import RadioInput from "./RadioInput";
import Button from "./Button";
import InputError from "./InputError";
import Tooltip from "./Tooltip";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface InputValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface FormValues extends InputValues {
  accountType: string;
}

const emailRegex = new RegExp(
  "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
);
const passwordRegex = new RegExp(
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
);

const initialErrorsState = {
  email: "",
  password: "",
  passwordConfirmation: "",
};

export default function SignUpForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  const [accountType, setAccountType] = useState("student");
  const [errors, setErrors] = useState<InputValues>(initialErrorsState);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const createAccount = async (formValues: FormValues) => {
    console.log(formValues);

    const supabase = createClientComponentClient();

    supabase.auth.signUp({
      email: formValues.email,
      password: formValues.password,
    });
  };

  const handleSignUp = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirmation = passwordConfirmationRef.current?.value;

    const newErrors = JSON.parse(JSON.stringify(initialErrorsState));

    if (
      typeof email === "undefined" ||
      typeof password === "undefined" ||
      typeof passwordConfirmation === "undefined"
    ) {
      return;
    }

    const formValues: InputValues = {
      email,
      password,
      passwordConfirmation,
    };

    if (!emailRegex.test(email)) {
      newErrors.email = "Email address is wrong.";
    }

    if (!passwordRegex.test(password)) {
      newErrors.password = "Password is too weak.";
    }

    if (password !== passwordConfirmation) {
      newErrors.passwordConfirmation = "Passwords are different.";
    }

    for (const key in newErrors) {
      if (!formValues[key as keyof InputValues].length) {
        newErrors[key as keyof InputValues] = "This field is required.";
      }
    }

    for (const key in newErrors) {
      if (newErrors[key].length) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors(initialErrorsState);

    createAccount({
      email,
      password,
      passwordConfirmation,
      accountType,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(e.target.id);
  };

  return (
    <>
      <div className="flex w-96 flex-col gap-5">
        <FormField>
          <Label>Account Type</Label>
          <div className="flex gap-3">
            <input
              id="student"
              name="accountType"
              type="radio"
              className="hidden"
              checked={accountType === "student"}
              onChange={handleInputChange}
            />
            <RadioInput isActive={accountType === "student"} id="student" />
            <input
              id="teacher"
              name="accountType"
              type="radio"
              className="hidden"
              checked={accountType === "teacher"}
              onChange={handleInputChange}
            />
            <RadioInput isActive={accountType === "teacher"} id="teacher" />
          </div>
        </FormField>
        <FormField>
          <Label>Email</Label>
          <Input
            refState={emailRef}
            isError={!!errors.email.length}
            placeholder="Enter email address..."
          />
          <InputError>{errors.email}</InputError>
        </FormField>
        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            refState={passwordRef}
            isError={!!errors.password.length}
            placeholder="Enter password..."
          />
          <InputError>
            {errors.password}{" "}
            {errors.password && (
              <span
                className="relative cursor-help text-slate-900"
                onMouseEnter={() => setTooltipVisible(true)}
                onMouseLeave={() => setTooltipVisible(false)}
              >
                {"(?)"}
                {tooltipVisible && (
                  <Tooltip position="bottom-right">
                    <p>
                      Password must contain at least 8 characters,
                      <br />
                      lower and upper case letter, number and a special sign.
                    </p>
                  </Tooltip>
                )}
              </span>
            )}
          </InputError>
        </FormField>
        <FormField>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            isError={!!errors.passwordConfirmation.length}
            refState={passwordConfirmationRef}
            placeholder="Confirm your password..."
          />
          <InputError>{errors.passwordConfirmation}</InputError>
        </FormField>
      </div>
      <Button onClick={handleSignUp}>Sign Up</Button>
    </>
  );
}
