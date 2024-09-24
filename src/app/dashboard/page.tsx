import { Box } from "@mui/material";
import {
  HIGHEST_TURNOVER_SPORTS,
  MOST_PROFITABLE_SPORTS,
} from "../constants/tableHeaders";
import SideTable from "@/components/dashboard/SideTable";
const winnerData = [
  {
    userId: "100000177",
    totalPnl: "994.5",
  },
  {
    userId: "100000177",
    totalPnl: "994.5",
  },
  {
    userId: "100000177",
    totalPnl: "994.5",
  },
  {
    userId: "100000177",
    totalPnl: "994.5",
  },
  {
    userId: "100000177",
    totalPnl: "994.5",
  },
];

const looserData = [
  {
    userId: "100000177",
    totalPnl: "994.5",
  },
];

const eventStats = [
  {
    name: "Total Events",
    value: 10,
  },
  {
    name: "Total Attendees",
    value: 10,
  },
  {
    name: "Upcoming Events",
    value: 10,
  },
  {
    name: "Past Events",
    value: 10,
  },
];
const DashboardPage = () => {
  return (
    <div>
      <div className="flex  w-full h-full justify-between gap-2 ">
        <div className="flex flex-wrap gap-5 h-[100vh] w-full  justify-center overflow-y-scroll ">
          {eventStats?.map((item) => {
            return (
              <div
                key={item?.name}
                className="border border-table-header-color rounded-[0.25rem] h-full lg:h-60 w-52 lg:w-60 flex flex-col justify-center items-center "
                width={250}
                height={250}
                minConstraints={[250, 250]}
                maxConstraints={[500, 500]}
              >
                <span className="text-xs font-normal mt-2">{item?.name}</span>
                <div className="w-full h-[0.75px] bg-[#F5F5F5] my-2"></div>
                <span className="text-2xl font-bold text-text-color-dark">
                  {item?.value}
                </span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col  gap-2  bg-red-200">
          <SideTable
            title="Winner List"
            header={HIGHEST_TURNOVER_SPORTS}
            data={winnerData}
            type="HIGHTEST_TURNOVER_SPORTS"
          />
          <SideTable
            header={MOST_PROFITABLE_SPORTS}
            title="Looser List"
            data={looserData}
            type="MOST_PROFITABLE_SPORTS"
          />
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
