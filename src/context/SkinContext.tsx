import React, { createContext } from "react";
import type { SkinData } from "../models/skinDataModel";

// 1. Defina o formato completo do seu Contexto (dados + funções)
export interface SkinContextType {
  listaskin: SkinData[];
  setListaskin: React.Dispatch<React.SetStateAction<SkinData[]>>;
}

export interface SkinProviderChildren {
  children: React.ReactNode;
}
// 2. Inicialize o contexto com o tipo correto
export const SkinContext = createContext<SkinContextType>(
  {} as SkinContextType,
);



