import { createContext } from "react";
import type { SkinData } from "../models/skinDataModel";

// SAVE CONTEXT
export interface SaveContextType {
  listasave: SkinData[];
  setListasave: React.Dispatch<React.SetStateAction<SkinData[]>>;
}

export interface SaveProviderChildren {
  children: React.ReactNode;
}

export const SavedContext = createContext<SaveContextType>(
  {} as SaveContextType,
);
