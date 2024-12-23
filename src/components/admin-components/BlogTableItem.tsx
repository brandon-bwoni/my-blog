import Image from "next/image";
import { Table, TableCell, TableRow, TableBody } from "../ui/table";

import image from "@/assets/image.jpg";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { Button } from "../ui/button";

type TableProps = {
  authorImg: HTMLImageElement;
  title: string;
  author: string;
  date: Date | string;
  deleteBlog: string;
  databaseID: string;
};

const BlogTableItem = ({
  authorImg,
  title,
  author,
  date,
  deleteBlog,
}: TableProps) => {
  return (
    <>
      <Table>
        <TableBody className="items-center gap-4 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <TableRow className="grid grid-cols-4 items-center">
            <TableCell className="flex flex-col ">
              <Image
                src={authorImg}
                alt=""
                width={40}
                height={40}
                className="rounded-full pb-1 ml-4"
              />
              <p className="font-medium">{author}</p>
            </TableCell>
            <TableCell className=" py-2 text-wrap">{title}</TableCell>
            <TableCell className="pl-16 py-2">{date}</TableCell>
            <TableCell className="pl-10 py-2">
              <div className="flex gap-2">
                <Button className="h-[48px] w-[60px] flex flex-col justify-center items-center shadow-none hover:shadow-md rounded-xl text-red-500 hover:bg-red-500 hover:text-white">
                  <BsTrash className="w-4 h-4 " />
                  <p className="text-xs font-semibold">Delete</p>
                </Button>
                <Button className="h-[48px] w-[60px] flex flex-col justify-center items-center shadow-none hover:shadow-md rounded-xl text-blue-500 hover:bg-blue-700 hover:text-white">
                  <FaEdit className="w-4 h-4 " />
                  <p className="text-xs">Edit blog</p>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default BlogTableItem;
