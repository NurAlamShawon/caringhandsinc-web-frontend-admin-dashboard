"use client";

import { Button } from "@/components/ui/button";
import Overview from "./employer/overview/page";
import { useDispatch } from "react-redux";
import { openLogoutModal } from "@/redux/features/logoutModalSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  return (
    <div>
      {/* Empolyee OVerview */}
      <Button variant="destructive" onClick={() => dispatch(openLogoutModal())}>
        Log out 
      </Button>
      <Overview />
    </div>
  );
}
