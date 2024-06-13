"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  const capitalizeFirstLetter = (name) => {
    if (!name) return "";
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  return (
    <div className="space-y-2 mb-4 ">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        Welcome Back {isLoaded ? ", " : " "}
        {capitalizeFirstLetter(user?.firstName)}
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
        This is your Financial Overview Report
      </p>
    </div>
  );
};
