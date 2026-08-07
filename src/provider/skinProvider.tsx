import { useEffect, useState } from "react";
import {
  SkinContext,
  type SkinProviderChildren,
} from "../context/SkinContext";
import type { SkinData } from "../models/skinDataModel";

export function SkinProvider({ children }: SkinProviderChildren) {
  const [listaskin, setListaskin] = useState<SkinData[]>(() => {
    const historico = localStorage.getItem("historico");

    return historico ? JSON.parse(historico) : [];
  });

  useEffect(() => {
    localStorage.setItem("historico", JSON.stringify(listaskin));
  }, [listaskin]);

  return (
    <SkinContext.Provider value={{ listaskin, setListaskin }}>
      {children}
    </SkinContext.Provider>
  );
}