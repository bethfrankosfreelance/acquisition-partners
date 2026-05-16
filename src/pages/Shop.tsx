import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { shopItems } from "@/data/shopItems";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container px-6 mx-auto max-w-6xl">
          <header className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-4">
              Shop
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              A curated collection of favorites. As an Amazon Associate, I earn from qualifying purchases.
            </p>
          </header>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {shopItems.map((item) => (
              <Card key={item.id} className="overflow-hidden flex flex-col">
                <div className="aspect-square bg-muted flex items-center justify-center p-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <p className="mt-4 font-display text-lg text-primary">{item.price}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <a href={item.url} target="_blank" rel="noopener noreferrer sponsored">
                      View on Amazon
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
