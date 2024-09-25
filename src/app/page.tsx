import LandingScreen from "@/components/landingscreen/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Management System",
  description: "Event management system Landing Page, Login Here",
};

const HomeScreen = () => {
  return <LandingScreen />;
};
export default HomeScreen;
