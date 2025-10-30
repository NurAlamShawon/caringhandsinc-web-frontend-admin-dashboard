"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { closeLogoutModal } from "@/redux/features/logoutModalSlice";
import { persistor } from "@/redux/store"; // make sure you export your persistor from store
import { RootState } from "@/redux/store";
import Image from "next/image";

export function LogoutModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.logoutModal.isOpen); // ✅ use Redux state

const handleLogout = async () => {
  // 1. Purge redux-persist
  await persistor.purge(); // ✅ wait for purge to finish

  // 2. Clear localStorage & sessionStorage
  localStorage.clear();
  sessionStorage.clear();

  // 3. Clear cookies
  document.cookie.split(";").forEach((c) => {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
  });

  // 4. Reload page / redirect
  window.location.href = "/";
};

  return (
    <Dialog open={isOpen} onOpenChange={() => dispatch(closeLogoutModal())}>
      <DialogContent className="max-w-sm flex flex-col gap-6">
        <DialogHeader className="flex flex-col items-center gap-4">
          <Image src="/logout.png" height={150} width={150} alt="Log Out" className="mx-auto" />
          <DialogTitle className="text-xl font-semibold text-center">Are you sure</DialogTitle>
          <DialogTitle className="text-xl font-semibold text-center">Logout your Account?</DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex gap-4 justify-center">
          <Button variant="outline" className="w-[150px]" onClick={() => dispatch(closeLogoutModal())}>
            Cancel
          </Button>
          <Button variant="destructive" className="w-[150px]" onClick={handleLogout}>
            Log out
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
