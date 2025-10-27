import { DashboardResponse } from "@/types/userTypes/userTypes";
import { StatCard } from "./mock-data";

// Example function to convert API response to StatCard[]
export const mapDashboardToStatCards = (response: DashboardResponse) => {
  const { users, jobs, companies } = response.data;

  const stats: StatCard[] = [
    {
      label: "Total Verified Users",
      value: users.totalVerified,
      icon: "/dashboard/1.png",
      trend: "+2.98%", // you can calculate real trend if available
    },
    {
      label: "Active Job Seekers",
      value: users.activeEmployers,
      icon: "/dashboard/2.png",
      trendDirection: "up",
    },
    {
      label: "Jobs Posted Today",
      value: jobs.totalPosted,
      icon: "/dashboard/4.png",
      trendDirection: "up",
    },
    {
      label: "Total Registered Companies",
      value: companies.totalRegistered,
      icon: "/dashboard/5.png",
    },
  ];

  return stats;
};
