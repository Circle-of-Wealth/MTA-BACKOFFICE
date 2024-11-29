import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Papa from "papaparse";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Upload } from "lucide-react";

export default function ReportsPage() {
  const [taxData, setTaxData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(30);
  const reports = useQuery(api.reports.getTaxReports) as any[];

  let headers: string[] = [
    "EFIN",
    "ID1040_Type",
    "SSN1",
    "Tax_Prep_Fee",
    "irs_acc_cd",
    "irs_ack_dt",
    "preparer_name",
    "pri_lname",
    "ptin",
    "ret_stat",
    "user_id",
  ].reverse();

  useEffect(() => {
    if (reports) {
      setTaxData(reports);
    }
  }, []);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (!file) {
      console.log("No file found");
      return;
    }

    Papa.parse(file, {
      complete(results) {
        let { data } = results;
        setTaxData(data as any[]);
        setCurrentPage(1);
      },
      header: false,
    });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = reports
    ? reports.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  const totalPages = Math.ceil(taxData.length / itemsPerPage);

  console.log(currentItems);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const totalPagesToShow = 5;

    if (totalPages <= totalPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("ellipsis");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("ellipsis");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <main className="flex justify-center overflow-y-auto p-6 md:p-8 lg:p-10">
      <div className="max-w-[1200px]">
        <h1 className="text-2xl font-semibold mb-6">Reports</h1>

        <div className="mb-6">
          <Input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            className="hidden"
            id="csv-upload"
          />
          <label htmlFor="csv-upload">
            <Button asChild>
              <span className="cursor-pointer">
                <Upload className="w-4 h-4 mr-2" />
                Upload CSV
              </span>
            </Button>
          </label>
        </div>

        <>
          <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  {headers.map((header: any, index: number) => (
                    <TableHead key={index}>{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentItems.map(
                  (
                    {
                      EFIN,
                      ID1040_Type,
                      SSN1,
                      Tax_Prep_Fee,
                      irs_acc_cd,
                      irs_ack_dt,
                      preparer_name,
                      pri_lname,
                      ptin,
                      ret_stat,
                      user_id,
                    },
                    key: number
                  ) => (
                    <TableRow key={key}>
                      <TableCell key={key}>{user_id}</TableCell>
                      <TableCell key={key}>{ret_stat}</TableCell>
                      <TableCell key={key}>{ptin}</TableCell>
                      <TableCell key={key}>{pri_lname}</TableCell>
                      <TableCell key={key}>{preparer_name}</TableCell>
                      <TableCell key={key}>{irs_ack_dt}</TableCell>
                      <TableCell key={key}>{irs_acc_cd}</TableCell>
                      <TableCell key={key}>{Tax_Prep_Fee}</TableCell>
                      <TableCell key={key}>{SSN1}</TableCell>
                      <TableCell key={key}>{ID1040_Type}</TableCell>
                      <TableCell key={key}>{EFIN}</TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>
              {getPageNumbers().map((pageNumber, index) => (
                <PaginationItem key={index}>
                  {pageNumber === "ellipsis" ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => paginate(pageNumber as number)}
                      isActive={currentPage === pageNumber}
                    >
                      {pageNumber}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    paginate(Math.min(totalPages, currentPage + 1))
                  }
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      </div>
    </main>
  );
}
