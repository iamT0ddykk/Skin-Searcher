import { useContext } from "react";
import { Preset } from "../../components/Preset";
import { SavedContext } from "../../context/SaveContext";
import { BiDownload, BiTrash } from "react-icons/bi";
import "./saved.css";
export function Saved() {
  const { listasave, setListasave } = useContext(SavedContext);
  function apagaUm(id: string) {
    setListasave(listasave.filter((item) => item.id !== id));
  }
  return (
    <>
      <Preset>Salvos</Preset>

      <div className="saved-area">
        <div className="saved-alig">
          {listasave.map((saved) => {
            return (
              <>
                <div className="saved-content" key={saved.id}>
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
                  <p>salvo as {saved.id}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
