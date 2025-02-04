import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image, { StaticImageData } from "next/image";

type BlogProps = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  date: Date;
  category: string;
  name: string;
};

const BlogCard = ({
  id,
  title,
  description,
  image,
  category,
  name,
}: BlogProps) => {
  return (
    <Link href={`/blogs/${id}`}>
      <Card className="w-[270px] h-[370px] rounded-3xl relative bg-gray-200 border  hover:transition-all hover:shadow-xl hover:border-0 shadow-none">
        <div className="h-1/2">
          <Link href="#">
            <Image
              src={image}
              alt={title}
              className="h-full w-full rounded-t-xl"
            />
          </Link>
        </div>
        <div className="h-[210px] flex flex-col gap-2 justify-center pt-2 px-3 bg-gray-100 hover:bg-white rounded-3xl absolute bottom-[1px]">
          <Button className="max-w-32 text-sm rounded-full font-semibold shadow-none hover:shadow-none hover:bg-yellow-300 bg-yellow-300 text-black h-6">
            {category}
          </Button>
          <div className="flex flex-col gap-1  items-center">
            <h1 className="font-semibold text-lg leading-5 text-wrap">
              {title}
            </h1>
            <p className="text-sm leading-4 ">{description.slice(0, 90)}</p>
          </div>
          <div className="flex gap-1 text-xs justify-start font-bold">
            <code>&#8212; </code>By
            <p className="text-red-600">
              <cite> {name}</cite>
            </p>
          </div>
          <div className="flex justify-end pb-2">
            <Button className=" flex justify-center items-center rounded-full h-7 px-3 text-xs font-normal hover:font-semibold hover:shadow-lg border-[1.2px] border-black/60 hover:bg-black/10 text-black hover:border-none shadow-none">
              Read more
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
