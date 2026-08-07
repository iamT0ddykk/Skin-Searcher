import { useEffect, useState } from "react";
import type { SkinData } from "../models/skinDataModel";
import {
  SavedContext,
  type SaveProviderChildren,
} from "../context/SaveContext";

export function SaveProvider({ children }: SaveProviderChildren) {
  const [listasave, setListasave] = useState<SkinData[]>(() => {
    const salvos = localStorage.getItem("salvos");

    if (!salvos) {
      return [];
    }

    try {
      const dados = JSON.parse(salvos);

      return Array.isArray(dados) ? dados : [];
    } catch (error) {
      console.error("Erro ao carregar skins salvas:", error);

      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("salvos", JSON.stringify(listasave));
  }, [listasave]);

  return (
    <SavedContext.Provider value={{ listasave, setListasave }}>
      {children}
    </SavedContext.Provider>
  );
}
