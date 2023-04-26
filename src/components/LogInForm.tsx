"use client";

import { useRef, useState } from "react";
import FormField from "./FormField";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import Error from "./Error";

interface FormValues {
  email: string;
  password: string;
}

const emailRegex = new RegExp(
  "^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
);

const initialErrorsState = {
  email: "",
  password: "",
};

export default function LogInForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<FormValues>(initialErrorsState);

  const handleLogIn = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const newErrors = JSON.parse(JSON.stringify(initialErrorsState));

    if (typeof email === "undefined" || typeof password === "undefined") {
      return;
    }

    const formValues: FormValues = {
      email,
      password,
    };

    if (!emailRegex.test(email)) {
      newErrors.email = "Email address is wrong.";
    }

    for (const key in newErrors) {
      if (!formValues[key as keyof FormValues].length) {
        newErrors[key as keyof FormValues] = "This field is required.";
      }
    }

    for (const key in newErrors) {
      if (newErrors[key].length) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors(initialErrorsState);

    console.log({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  };

  return (
    <>
      <div className="flex w-96 flex-col gap-5">
        <FormField>
          <Label>Email</Label>
          <Input
            refState={emailRef}
            placeholder="Enter email address..."
            isError={!!errors.email.length}
          />
          <Error>{errors.email}</Error>
        </FormField>
        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            refState={passwordRef}
            placeholder="Enter password..."
            isError={!!errors.password.length}
          />
          <Error>{errors.password}</Error>
        </FormField>
      </div>
      <Button onClick={handleLogIn}>Log In</Button>
    </>
  );
}
