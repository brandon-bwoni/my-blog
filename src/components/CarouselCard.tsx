import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type CarouselCardProps = {
  title: string;
  description: string;
  image: HTMLImageElement;
};

const CarouselCard = ({ title, description, image }: CarouselCardProps) => {
  return (
    <Card className="relative w-screen lg:h-screen sm:h-96 rounded-3xl bg-pink-300">
      <CardContent>
        <Image
          src={image}
          alt=""
          className="w-full lg:h-screen sm:h-96 rounded-3xl"
        />
      </CardContent>
      <CardFooter className="sm:h-64 sm:w-72 lg:w-96 lg:h-72  absolute bg-gray-100 bg-opacity-50 rounded-xl sm:top-16  sm:left-8 lg:top-48 lg:left-32">
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex flex-col gap-2  items-center">
            <h1 className="font-bold sm:text-lg lg:text-2xl sm:leading-5 lg:leading-6">
              {title}
            </h1>
            <p className="sm:text-xs md:text-sm lg:text-md leading-4">
              {description}
            </p>
          </div>
          <div className="flex justify-end">
            <Link href="#">
              <Button className="rounded-full h-7 text-xs font-medium">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CarouselCard;
