import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronUp, ChevronDown } from "lucide-react";

// Types
export interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

export interface TableSkeletonProps {
  columns?: Column[];
  rows?: number;
  headerClassName?: string;
}

export const tableColumns: Column[] = [
  { key: "Job Id", label: "Job Id", sortable: true, width: "8%" },
  { key: "Posting Date", label: "Posting Date", sortable: true, width: "13%" },
  { key: "Company Name", label: "Company Name", sortable: true, width: "13%" },
  { key: "Position", label: "Position", width: "13%" },
  { key: "Salary Range", label: "Salary Range", sortable: true, width: "13%" },
  { key: "Status", label: "Status", width: "8%" },
  { key: "Applicants", label: "Applicants", sortable: true, width: "8%" },
  { key: "Deadline", label: "Deadline", width: "8%" },
  { key: "Time Left", label: "Time Left", width: "8%" },
  { key: "Action", label: "Action", sortable: true, width: "8%" },
];

// Table Skeleton Component
export function TableSkeleton({
  columns,
  rows = 5,
  headerClassName = "bg-emerald-600",
}: TableSkeletonProps) {
  return (
    <div className="border rounded-md overflow-hidden">
      <Table className="px-8">
        <TableHeader className={headerClassName}>
          <TableRow>
            {columns?.map((column) => (
              <TableHead
                key={column.key}
                className="text-white font-medium text-[18px]"
                style={{ width: column.width }}
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <div className="flex flex-col gap-0.5">
                      <ChevronUp className="w-3 h-3 text-white/40" />
                      <ChevronDown className="w-3 h-3 text-white/40" />
                    </div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns?.map((column) => (
                <TableCell key={column.key} className="py-4">
                  <Skeleton className="h-5 w-full" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
