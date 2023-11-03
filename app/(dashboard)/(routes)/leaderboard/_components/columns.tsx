"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type leaderboard = {
  firstName: string;
  lastName: string;
  rank: number;
  score: number;
};

export const columns: ColumnDef<leaderboard>[] = [
  { 
    // Update columns definition
    accessorKey: "username",
    header: () => <div>User Name</div>,
    cell: ({ row }) => {
      const { original } = row;
      const { firstName, lastName } = original;
      return (
        <div>
          {firstName}
           {/* if lastName is not null, add a space and lastName */}
          {lastName && ` ${lastName}`}
        </div>
      );
    },
  },
  {
    accessorKey: "rank",
    header: "Rank",
  },
  {
    accessorKey: "score",
    header: "Score",
  },
];
