"use client"; //All this means is that it is not a react server component, it is also a client component
//need to read up more on that
//This is a modal provider that will be used to display the modal

import { useEffect, useState } from "react";
import { CreateServerModal } from "../modals/create-server-modal";

export const ModalProvider = () => {
  //TO fix the hydration error caused by the modals
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <CreateServerModal />
    </>
  );
};
