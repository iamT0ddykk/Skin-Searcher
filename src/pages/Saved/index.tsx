import { useContext } from "react";
import { SavedContext } from "../../context/SaveContext";
import { BiDownload, BiTrash } from "react-icons/bi";
import "./saved.css";
import { Preset } from "../../components/Preset";

export function Saved() {
  const { listasave, setListasave } = useContext(SavedContext);

  function apagaUm(id: string) {
    setListasave((prev) => prev.filter((item) => item.id !== id));
  }

  if (listasave.length === 0) {
    return <Preset> Você não salvou nenhuma skin... </Preset>;
  }

  return (
    <>
      <Preset>
        <h1>Salvos</h1>

        <div className="saved-area">
          <div className="saved-alig">
            {listasave.map((saved) => (
              <div className="saved-content" key={saved.id}>
                <p className="nickname">{saved.user}</p>

                <img src={saved.bodyUrl} alt={`Skin de ${saved.user}`} />

                <img src={saved.headUrl} alt={`Cabeça de ${saved.user}`} />

                <div className="saved-opt">
                  <a href={saved.downloadUrl} title="Baixar skin" download>
                    <BiDownload size={35} />
                  </a>

                  <a onClick={() => apagaUm(saved.id)} title="Apagar skin">
                    <BiTrash size={35} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Preset>
    </>
  );
}
