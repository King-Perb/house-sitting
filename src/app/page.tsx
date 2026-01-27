import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section Placeholder */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to House &amp; Pet Sitter
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Professional house and pet sitting services in Gran Canaria. 
          Your home and pets are in caring, experienced hands.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg">Book Now</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Test Cards Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Pet Sitting</CardTitle>
              <CardDescription>
                Professional care for your furry friends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Daily visits, feeding, walks, medication administration, and lots of love and attention for your pets.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>House Sitting</CardTitle>
              <CardDescription>
                Keep your home safe and maintained
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Security checks, plant watering, mail collection, and general property maintenance while you&apos;re away.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Combined Care</CardTitle>
              <CardDescription>
                Complete peace of mind
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Full house and pet sitting services combined. The best option for extended trips and vacations.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Responsive Test Section */}
      <section className="text-center py-8 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          Layout Verification Complete
        </h2>
        <p className="text-muted-foreground">
          Header, Footer, and Card components are working correctly.
        </p>
      </section>
    </div>
  );
}
