"use client";

import React from "react";

const SideTable = ({
  title,
  data,
  type,
  header,
}: {
  title?: string;
  data?: any;
  type;
  header: any;
}) => {
  return (
    <div className="flex flex-col bg-white p-2 rounded-lg items-center h-max w-max">
      <div className="flex w-full items-center justify-start gap-2">
        {/* <Trophy_Icon />  */}
        🏆
        <h1 className="font-bold ">{title}</h1>
        {/* <select
          value={selectedFrom}
          onChange={(e) => {
            const q = returnQueryObj(e, type);
            router.push(`${pathname}?q=${q}`);
          }}
          className="pointer"
        >
          <option value="THIS_MONTH">This Month</option>
          <option value="LAST_MONTH">Previous Month</option>
          <option value="THIS_WEEK">This Week</option>
          <option value="TODAY">Today</option>
          <option value="YESTERDAY">Yesterday</option>
        </select> */}
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
          {data?.map((item, i) => (
            <tr
              key={i + item?.betSport}
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

function loadTableColumns(header, data) {
  return header.map((col) => {
    return (
      <td className="py-4 px-4" key={col?.key}>
        {data[col?.key]}
      </td>
    );
  });
}

export default SideTable;
