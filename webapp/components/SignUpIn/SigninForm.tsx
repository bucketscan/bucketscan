"use client";

import { useState, useEffect, FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Input, Button } from "@nextui-org/react";
import { login } from "./actions";
import FormLayout from "./FormLayout";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showBanner, setShowBanner] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("sign-up") === "true") {
      setShowBanner(true);
    }
  }, [searchParams]);

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    if (email && password && isValidEmail) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const result = await login(formData);
      if (result?.error) {
        setErrorMessage(result.error);
      } else {
        setShowError(false);
      }
    } else {
      setShowError(true);
    }
  };

  return (
    <FormLayout
      title="Sign In"
      linkText="Don't have an account? Sign up now"
      linkHref="/sign-up"
    >
      {showBanner && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          Thanks for signing up! Please confirm your email and then head back
          here to sign in.
        </div>
      )}
      <div>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          value={email}
          variant="flat"
          onChange={(e) => {
            setEmail(e.target.value);
            if (showError) setShowError(false);
            setErrorMessage("");
          }}
          onBlur={() => setEmailTouched(true)}
          isRequired
          isInvalid={emailTouched && !validateEmail(email)}
          errorMessage="Please enter a valid email address"
        />
        {showError && (!email || !validateEmail(email)) && (
          <p className="mt-1 text-sm text-red-600">
            Please enter a valid email
          </p>
        )}
      </div>
      <div>
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          variant="flat"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (showError) setShowError(false);
            setErrorMessage("");
          }}
          onBlur={() => setPasswordTouched(true)}
          isRequired
          isInvalid={passwordTouched && !password}
          errorMessage="Please enter your password"
        />
        {showError && !password && (
          <p className="mt-1 text-sm text-red-600">
            Please enter your password
          </p>
        )}
      </div>
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
      <Button onClick={handleSubmit} className="mt-4 w-full">
        Log in
      </Button>
    </FormLayout>
  );
}
