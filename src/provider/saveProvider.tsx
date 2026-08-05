import { useState } from "react";
import type { SkinData } from "../models/skinDataModel";
import {
  SavedContext,
  type SaveProviderChildren,
} from "../context/SaveContext";

export function SaveProvider({ children }: SaveProviderChildren) {
  // 3. O estado guarda um array de SkinData
  const [listasave, setListasave] = useState<SkinData[]>([]);

  return (
    // 4. Passe um OBJETO contendo a lista E a função de atualização no value
    <SavedContext.Provider value={{ listasave, setListasave }}>
      {children}
    </SavedContext.Provider>
  );
}
