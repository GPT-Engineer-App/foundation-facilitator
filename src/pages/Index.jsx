import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Welcome to Your Bare-Bones App</h1>
      <p className="text-center">
        This is a minimal web application. Use this as a starting point to build your project.
      </p>
      <Button variant="outline">Get Started</Button>
    </div>
  );
};

export default Index;