import { Suspense } from "react";
import SignInForm from "./../../components/SignUpIn/SigninForm";

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}
