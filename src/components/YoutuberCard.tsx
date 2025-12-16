
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

interface Youtuber {
  name: string;
  description: string;
  url: string;
  image: string;
}

interface YoutuberCardProps {
  youtuber: Youtuber;
}

export function YoutuberCard({ youtuber }: YoutuberCardProps) {
  return (
    <Card>
      <CardHeader>
        <img
          src={youtuber.image}
          alt={youtuber.name}
          className="w-24 h-24 rounded-full"
        />
        <CardTitle>{youtuber.name}</CardTitle>
        <CardDescription>{youtuber.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          <a href={youtuber.url} target="_blank" rel="noreferrer">
            <Button>Go to channel</Button>
          </a>
        </p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
