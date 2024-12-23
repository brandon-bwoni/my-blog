"use client";
import { useEffect, useState } from "react";
/**import axios from axios */
/**import {toast} from "react-toastify" */

import EmailTable from "@/components/admin-components/EmailTable";

import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";

const Subscriptions = () => {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const response = axios.delete("/api/email", {
    params: {
      id: emailId,
    },
  });
  if (response.data.success) {
    toast.success(response.data.msg);
    fetchEmails();
  } else {
    toast.error("Failed to delete email");
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-4 px-4 sm:pl-12">
      <h1 className="text-center font-semibold text-xl text-slate-700">
        Email Subscriptions
      </h1>
      <div className="h-[85vh] max-w-[920px] overflow-y-auto mt-4 no-scrollbar bg-slate-200 rounded-xl">
        <Table className="text-sm text-slate-700">
          <TableHeader className="text-sm text-gray-700 text-left uppercase bg-gray-50">
            <TableRow className="flex gap-40">
              <TableHead className="px-6 py-2">Email Subscriptions</TableHead>
              <TableHead className="px-6 py-2">Date</TableHead>
              <TableHead className="px-6 py-2">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-[80%]">
            {emails.map((email, index) => {
              return (
                <EmailTable
                  key={index}
                  emailId={email.email}
                  emailId={email._id}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Subscriptions;
