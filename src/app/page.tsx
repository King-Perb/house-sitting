import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        House &amp; Pet Sitter
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-8">
        Professional house and pet sitting services in Gran Canaria
      </p>
      <div className="flex gap-4">
        <Button>Book Now</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </div>
  );
}
