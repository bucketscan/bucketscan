"use client";

import { useState, FormEvent, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import { signup } from "./actions";
import FormLayout from "./FormLayout";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  useEffect(() => {
    setPasswordRules({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*]/.test(password),
    });
  }, [password]);

  const validatePassword = () => {
    return Object.values(passwordRules).every(Boolean);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isValidPassword = validatePassword();
    const isValidEmail = validateEmail(email);
    if (email && isValidPassword && isValidEmail) {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      await signup(formData);
    } else {
      setShowError(true);
    }
  };

  return (
    <FormLayout
      title="Sign Up"
      linkText="Have an account? Sign in now"
      linkHref="/sign-in"
    >
      <div>
        <Input
          id="email"
          name="email"
          label="Email"
          type="email"
          isInvalid={emailTouched && !validateEmail(email)}
          errorMessage="Please enter a valid email address"
          variant="flat"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (showError) setShowError(false);
          }}
          onBlur={() => setEmailTouched(true)}
          isRequired
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
          value={password}
          variant="flat"
          isInvalid={passwordTouched && !validatePassword()}
          errorMessage="Please enter a valid password"
          onFocus={() => setPasswordTouched(true)}
          onChange={(e) => {
            setPassword(e.target.value);
            if (showError) setShowError(false);
          }}
          onBlur={() => setPasswordTouched(true)}
          isRequired
        />
        {(password || passwordTouched) && (
          <ul className="mt-2 text-sm text-gray-600">
            <li className="flex items-center">
              <CheckCircleIcon
                className={`h-5 w-5 mr-2 ${
                  passwordRules.length ? "text-green-500" : "text-gray-500"
                }`}
              />
              At least 8 characters
            </li>
            <li className="flex items-center">
              <CheckCircleIcon
                className={`h-5 w-5 mr-2 ${
                  passwordRules.uppercase ? "text-green-500" : "text-gray-500"
                }`}
              />
              An uppercase letter
            </li>
            <li className="flex items-center">
              <CheckCircleIcon
                className={`h-5 w-5 mr-2 ${
                  passwordRules.lowercase ? "text-green-500" : "text-gray-500"
                }`}
              />
              A lowercase letter
            </li>
            <li className="flex items-center">
              <CheckCircleIcon
                className={`h-5 w-5 mr-2 ${
                  passwordRules.number ? "text-green-500" : "text-gray-500"
                }`}
              />
              A number
            </li>
            <li className="flex items-center">
              <CheckCircleIcon
                className={`h-5 w-5 mr-2 ${
                  passwordRules.specialChar ? "text-green-500" : "text-gray-500"
                }`}
              />
              A special character
            </li>
          </ul>
        )}
      </div>
      <Button onClick={handleSubmit} className="mt-4 w-full">
        Sign up
      </Button>
    </FormLayout>
  );
}
