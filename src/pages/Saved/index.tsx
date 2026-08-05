import { useContext } from "react";
import { Preset } from "../../components/Preset";
import { SavedContext } from "../../context/SaveContext";
import { BiDownload, BiTrash } from "react-icons/bi";
import "./saved.css";
import { format } from "date-fns";
export function Saved() {
  const { listasave, setListasave } = useContext(SavedContext);
  function apagaUm(id: string) {
    setListasave(listasave.filter((item) => item.id !== id));
  }

  if (listasave.length == 0) {
    return <Preset>Voce nao salvou nenhuma skin...</Preset>;
  } else {
    return (
      <>
        <Preset>Salvos</Preset>

        <div className="saved-area">
          <div className="saved-alig">
            {listasave.map((saved) => {
              return (
                <>
                  <div
                    className="saved-content"
                    key={format(Number(saved.id), "dd/MM/yyyy HH:mm:ss")}
                  >
                    <p className="nickname">{saved.user}</p>
                    <img src={saved.bodyUrl} alt="" />
                    <img src={saved.headUrl} alt="" />
                    <div className="saved-opt">
                      <a href={saved.downloadUrl} title="Baixar saved">
                        <BiDownload size={35}></BiDownload>
                      </a>
                      <a onClick={() => apagaUm(saved.id)} title="Apagar saved">
                        {" "}
                        <BiTrash size={35}></BiTrash>
                      </a>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
