import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <div className="max-w-screen-xl mx-auto w-full p-4  lg:p-8 flex flex-col h-full">
      {children}
    </div>
  );
}
