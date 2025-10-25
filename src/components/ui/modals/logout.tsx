"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent, 
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { closeLogoutModal } from "@/redux/features/logoutModalSlice";
import Image from "next/image";

export function LogoutModal() { 
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.logoutModal.isOpen);

  const handleLogout = () => {
    // // clear local storage / session
    // localStorage.removeItem("authToken");
    // // optional: dispatch(logoutAction());
    // dispatch(closeLogoutModal());
    // router.push("/login");
    console.log("Log out hitted");
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(closeLogoutModal())}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <Image
            src="/logout.png"
            height={200}
            width={200}
            alt="Log Out"
            className="mx-auto"
          />
          <DialogTitle className="mt-4 text-h3 max-w-sm mx-auto text-center">
            Are you sure{" "}
          </DialogTitle>
          <DialogTitle className="mb-4 text-h3 max-w-sm mx-auto text-center">
            Logout your Account?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex overflow-hidden mx-auto ">
          <Button
            variant="outline"
            className="w-[200px]"
            onClick={() => dispatch(closeLogoutModal())}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="w-[200px]"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
