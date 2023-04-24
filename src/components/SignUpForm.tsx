import FormField from "./FormField";
import Input from "./Input";
import Label from "./Label";
import RadioInput from "./RadioInput";

interface Props {
  states: {
    accountType: string;
    setAccountType: React.Dispatch<React.SetStateAction<string>>;
    emailRef: React.Ref<HTMLInputElement>;
    passwordRef: React.Ref<HTMLInputElement>;
    passwordConfirmationRef: React.Ref<HTMLInputElement>;
  };
}

export default function SignUpForm({
  states: {
    setAccountType,
    accountType,
    emailRef,
    passwordRef,
    passwordConfirmationRef,
  },
}: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(e.target.id);
  };

  return (
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
        <Input refState={emailRef} placeholder="Enter email address..." />
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
  );
}
