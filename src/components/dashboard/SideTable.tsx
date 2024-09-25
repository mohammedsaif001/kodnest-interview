"use client";

import React from "react";
import { TEventData, TTableHeaders } from "../../../types";
import Link from "next/link";

const SideTable = ({
  title,
  data,
  header,
}: {
  title: string;
  data: TEventData[];
  header: TTableHeaders[];
}) => {
  return (
    <div className="flex flex-col bg-white p-2 rounded-lg items-center h-max w-max">
      <div className="flex w-full items-center justify-start gap-2">
        🏆
        <h1 className="font-bold ">{title}</h1>
      </div>
      <table className="w-full overflow-scroll text-xs lg:text-sm mt-4">
        <thead className="capitalize bg-table-header-color text-left">
          <tr>
            {header?.map((head) => (
              <th className="py-4 px-4 " key={head?.name}>
                {head?.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              key={item?.eventId}
              className="even:bg-table-header-color-light"
            >
              {loadTableColumns(header, item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function loadTableColumns(header: TTableHeaders[], data) {
  console.log("Shjkshss", header, data);
  return header.map((col) => {
    return (
      <td className="py-4 px-4" key={col?.key}>
        {col?.type === "CLICKABLE" ? (
          <Link
            href={`/events/${data[col?.key]}`}
            className="cursor-pointer underline"
          >
            {data[col?.key]}
          </Link>
        ) : (
          data[col?.key]
        )}
        {}
      </td>
    );
  });
}

export default SideTable;
