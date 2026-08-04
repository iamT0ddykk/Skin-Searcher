import { useState } from "react";
import { SkinContext, type SkinProviderChildren } from "../context/SkinContext";
import type { SkinData } from "../models/skinDataModel";

export function SkinProvider({ children }: SkinProviderChildren) {
  // 3. O estado guarda um array de SkinData
  const [listaskin, setListaskin] = useState<SkinData[]>([]);

  return (
    // 4. Passe um OBJETO contendo a lista E a função de atualização no value
    <SkinContext.Provider value={{ listaskin, setListaskin }}>
      {children}
    </SkinContext.Provider>
  );
}
