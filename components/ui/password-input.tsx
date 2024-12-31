"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Your password"
        minLength={6}
        required
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute inset-y-0 right-0 px-3 text-sm text-gray-600"
      >
        {showPassword ? <FaEye className="icon" /> : <FaEyeSlash className="icon" />}
      </button>
    </div>
  );
};

export default PasswordInput;
