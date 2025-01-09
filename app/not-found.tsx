import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-xl text-primary">Page Not Found</p>
      <Link href="/">
        <Button className="mt-6">Go back home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
