"use client";

import { useRef, useState } from "react";
import FormField from "./FormField";
import Input from "./Input";
import Label from "./Label";
import RadioInput from "./RadioInput";
import Button from "./Button";

export default function SignUpForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);
  const [accountType, setAccountType] = useState("student");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSignUp = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirmation = passwordConfirmationRef.current?.value;

    if (!email || !password || !passwordConfirmation) {
    }

    console.log({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      passwordConfirmation: passwordConfirmationRef.current?.value,
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
            isError
            placeholder="Enter email address..."
          />
          <span className="absolute left-0 top-full text-sm font-semibold text-red-600">
            Field cannot be empty.
          </span>
        </FormField>
        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            refState={passwordRef}
            placeholder="Enter password..."
          />
        </FormField>
        <FormField>
          <Label>Confirm Password</Label>
          <Input
            type="password"
            refState={passwordConfirmationRef}
            placeholder="Confirm your password..."
          />
        </FormField>
      </div>
      <Button onClick={handleSignUp}>Sign Up</Button>
    </>
  );
}
