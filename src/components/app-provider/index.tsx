import { SkeletonTheme } from "react-loading-skeleton";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <SkeletonTheme baseColor="#d8d8d8" highlightColor="#f5f5f5">
      {children}
    </SkeletonTheme>
  );
};

export default AppProvider;
