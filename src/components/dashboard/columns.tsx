import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export interface ArticleData {
  id: string;
  title: string;
  keyword: string;
  traffic: number;
  words: number;
  createdOn: string;
  status: "generated" | "published" | "scheduled" | "archived";
}

export const columns: ColumnDef<ArticleData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="border-2 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: "Article Title",
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate font-medium text-primary">
        {row.getValue("title")}
      </div>
    ),
  },
  {
    accessorKey: "keyword",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent hover:text-primary"
        >
          Keyword [Traffic]
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const keyword = row.getValue("keyword") as string;
      const traffic = row.original.traffic;
      return (
        <div className="max-w-[200px] truncate">
          {keyword} [{traffic}]
        </div>
      )
    },
  },
  {
    accessorKey: "words",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent hover:text-primary"
        >
          Words
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("words")}</div>
    },
  },
  {
    accessorKey: "createdOn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0 hover:bg-transparent hover:text-primary"
        >
          Created On
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("createdOn")}</div>
    },
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 px-4 border-2 hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link to={`/articles/${row.original.id}`}>View</Link>
          </Button>
        </div>
      )
    },
  },
  {
    id: "publish",
    header: "Publish",
    cell: () => {
      return (
        <div className="flex justify-center items-center">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
          </Avatar>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2 hover:bg-muted">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem className="cursor-pointer">Publish Now</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Schedule</DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
];