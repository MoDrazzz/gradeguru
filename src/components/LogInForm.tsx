"use client";

import { useRef, useState } from "react";
import FormField from "./FormField";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
import InputError from "./InputError";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = async (formValues: FormValues) => {
    console.log(formValues);

    setIsLoading(true);

    const supabase = createClientComponentClient();

    let { data, error } = await supabase.auth.signInWithPassword({
      email: formValues.email,
      password: formValues.password,
    });

    setIsLoading(false);

    if (!error) {
      router.push("/shell/");
    } else if (error.status === 400) {
      setErrors({
        email: " ",
        password: "Email or password is wrong.",
      });
    }
  };

  const handleLogIn = (e: React.FormEvent) => {
    e.preventDefault();

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

    login({
      email,
      password,
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
          <InputError>{errors.email}</InputError>
        </FormField>
        <FormField>
          <Label>Password</Label>
          <Input
            type="password"
            refState={passwordRef}
            placeholder="Enter password..."
            isError={!!errors.password.length}
          />
          <InputError>{errors.password}</InputError>
        </FormField>
      </div>
      <Button type="submit" onClick={handleLogIn} disabled={isLoading}>
        Log In
      </Button>
    </>
  );
}
