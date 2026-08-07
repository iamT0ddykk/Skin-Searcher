import React, { createContext } from "react";
import type { SkinData } from "../models/skinDataModel";

export interface SavedContextType {
  listasave: SkinData[];
  setListasave: React.Dispatch<React.SetStateAction<SkinData[]>>;
}

export interface SaveProviderChildren {
  children: React.ReactNode;
}

export const SavedContext = createContext<SavedContextType>(
  {} as SavedContextType,
);
