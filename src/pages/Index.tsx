import React from "react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthHeader } from "@/components/auth/AuthHeader";
import { AuthForm } from "@/components/auth/AuthForm";
import { TermsFooter } from "@/components/auth/TermsFooter";

const Index = () => {
  return (
    <AuthLayout>
      <AuthHeader
        title="Create an account"
        description="Enter your email & password below to create your account"
      />
      <AuthForm />
      <TermsFooter />
    </AuthLayout>
  );
};

export default Index;
