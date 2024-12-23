import { Table, TableBody, TableCell, TableRow } from "../ui/table";

// type EmailTableProps = {
//   email: string;
//   dbID: string;
//   date: Date;
//   deleteEmail: () => void;
// };

const EmailTable = () => {
  return (
    <>
      <Table className="bg-white border-b text-left">
        <TableBody className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>26 July 2024</TableCell>
            <TableCell>
              <button className="text-red-500">Delete</button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default EmailTable;
