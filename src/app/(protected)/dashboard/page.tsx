import DashboardClientPage from "@/components/dashboard/DashboardClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | EMS",
  description:
    "Statistics of Events, Dashboard. Total Event | Total Attendees | Upcoming Events | Past Events",
};

const DashboardServerPage = () => {
  return <DashboardClientPage />;
};
export default DashboardServerPage;
