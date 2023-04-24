import FormField from "./FormField";
import Input from "./Input";
import Label from "./Label";

interface Props {
  states: {
    emailRef: React.Ref<HTMLInputElement>;
    passwordRef: React.Ref<HTMLInputElement>;
  };
}

export default function LogInForm({
  states: { emailRef, passwordRef },
}: Props) {
  return (
    <div className="flex w-96 flex-col gap-5">
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
    </div>
  );
}
