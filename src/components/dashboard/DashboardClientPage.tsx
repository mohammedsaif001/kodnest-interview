"use client";
import SideTable from "@/components/dashboard/SideTable";
import { useSelector } from "@/config/redux/store";
import { UPCOMING_PAST_EVENTS_HEADER } from "@/constants/tableHeaders";

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

const DashboardClientPage = () => {
  const dashboardStats = useSelector((store) => store.dashboardStats);
  const { pastEvents, totalAttendees, upcomingEvents, totalEvents } =
    dashboardStats;

  //   const [eventStats, setEventStats] = useState([
  //     {
  //       name: "Total Events",
  //       value: totalEvents,
  //     },
  //     {
  //       name: "Total Attendees",
  //       value: totalAttendees,
  //     },
  //     {
  //       name: "Upcoming Events",
  //       value: upcomingEvents.length,
  //     },
  //     {
  //       name: "Past Events",
  //       value: pastEvents.length,
  //     },
  //   ]);

  const eventStats = [
    {
      name: "Total Events",
      value: totalEvents,
    },
    {
      name: "Total Attendees",
      value: totalAttendees,
    },
    {
      name: "Upcoming Events",
      value: upcomingEvents.length,
    },
    {
      name: "Past Events",
      value: pastEvents.length,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex flex-col  w-full justify-between gap-4">
        <div className="flex flex-wrap gap-5  w-full  justify-center overflow-y-scroll ">
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

        <div className="flex flex-col md:flex-row justify-center items-center w-full  gap-2  ">
          <SideTable
            title="Upcoming Events"
            header={UPCOMING_PAST_EVENTS_HEADER}
            data={upcomingEvents}
            type="HIGHTEST_TURNOVER_SPORTS"
          />
          <SideTable
            header={UPCOMING_PAST_EVENTS_HEADER}
            title="Past Events"
            data={pastEvents}
            type="MOST_PROFITABLE_SPORTS"
          />
        </div>
      </div>
    </div>
  );
};
export default DashboardClientPage;
