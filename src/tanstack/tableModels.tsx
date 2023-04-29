import {
  ColumnDef,
  FilterFn,
  SortingFn,
  sortingFns,
} from "@tanstack/react-table";
import React from "react";
import { Person } from "../components/makeData";
import {
  rankItem,
  compareItems,
  RankingInfo,
} from "@tanstack/match-sorter-utils";
import IndeterminateCheckbox from "./components/InderterminateCheckbox";
import moment from "moment";

export const fuzzyFilter: FilterFn<Person> = (
  row,
  columnId,
  value,
  addMeta
) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the ranking info
  addMeta(itemRank);

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const fuzzySort: SortingFn<Person> = (rowA, rowB, columnId) => {
  let dir = 0;

  // Only sort by rank if the column has ranking information
  if (rowA.columnFiltersMeta[columnId]) {
    dir = compareItems(
      rowA.columnFiltersMeta[columnId]! as RankingInfo,
      rowB.columnFiltersMeta[columnId]! as RankingInfo
    );
  }

  // Provide an alphanumeric fallback for when the item ranks are equal
  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};

export type TableMeta = {
  updateData: (rowIndex: number, columnId: string, value: unknown) => void;
};

// Give our default column cell renderer editing superpowers!
export const defaultColumn: Partial<ColumnDef<Person>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    const initialValue = getValue();
    // We need to keep and update the state of the cell normally
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = React.useState(initialValue);

    // When the input is blurred, we'll call our table meta's updateData function
    const onBlur = () => {
      (table.options.meta as TableMeta).updateData(index, id, value);
    };

    // If the initialValue is changed external, sync it up with our state
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <input
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
      />
    );
  },
};

export const columns: ColumnDef<Person>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <div className="px-1">
        <IndeterminateCheckbox
          checked={row.getIsSelected()}
          indeterminate={row.getIsSomeSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      </div>
    ),
  },
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
  },
  {
    accessorFn: (row) => `${row.firstName} ${row.lastName}`,
    id: "fullName",
    header: "Full Name",
    cell: (info) => info.getValue(),
    filterFn: fuzzyFilter,
    sortingFn: fuzzySort,
  },
  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
  },
  {
    accessorKey: "joinDate",
    header: "joinDate",
    // cell: info => info.getValue<Date>().toTimeString(),
    cell: (info) => {
      return moment().format("YY/MM/DD");
    },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
  },
  {
    id: "actions",
    header: "",
    cell: (info) => <button>수정</button>,
  },
];

export const getTableMeta = (
  setData: React.Dispatch<React.SetStateAction<Person[]>>,
  skipAutoResetPageIndex: () => void
) =>
  ({
    updateData: (rowIndex, columnId, value) => {
      // Skip age index reset until after next rerender
      skipAutoResetPageIndex();
      setData((old) =>
        old.map((row, index) => {
          if (index !== rowIndex) return row;

          return {
            ...old[rowIndex]!,
            [columnId]: value,
          };
        })
      );
    },
  } as TableMeta);
