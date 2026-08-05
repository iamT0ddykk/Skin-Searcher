import { useContext } from "react";
import "./history.css";
import { SkinContext } from "../../context/SkinContext";
import { Link } from "react-router";
import { BiDownload, BiSave, BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";
import { Preset } from "../../components/Preset";

export function History() {
  const { listaskin, setListaskin } = useContext(SkinContext);
  console.log(listaskin);

  function zeraLista() {
    const cof = confirm("Deseja deletar TODO historico?");
    if (cof) {
      setListaskin([]);
      toast.success("Historico apagado...", {
        position: "top-right", // Posição: 'top-left', 'top-center', 'bottom-right', etc.
        autoClose: 2000, // Tempo em milissegundos para fechar (3s)
        hideProgressBar: false, // Ocultar a barra de progresso
        theme: "dark", // Tema: 'light', 'dark', 'colored'
        icon: <BiTrash size={20} color="red" />,
      });
    }
    return;
  }

  function apagaUm(id: string) {
    setListaskin(listaskin.filter((item) => item.id !== id));
  }

  if (listaskin.length == 0) {
    return (
      <>
        <div className="texts-area">
          <h1>
            <Link to={"/"}>Skin Searcher</Link>
          </h1>
          <p>Voce nao pesquisou por nenhuma Skin...</p>
        </div>
      </>
    );
  }
  return (
    <>
      <Preset>
        <button
          className="delete-button"
          onClick={zeraLista}
          title="Excluir Historico"
        >
          <BiTrash size={30}></BiTrash>
        </button>
      </Preset>

      <div className="history-area">
        <div className="history-alig">
          {listaskin.map((skin) => {
            return (
              <>
                <div className="history-content" key={skin.id}>
                  <p className="nickname">{skin.user}</p>
                  <img src={skin.bodyUrl} alt="" />
                  <img src={skin.headUrl} alt="" />
                  <div className="history-opt">
                    <a href={skin.downloadUrl} title="Baixar Skin">
                      <BiDownload size={35}></BiDownload>
                    </a>
                    <a>
                      <BiSave size={35} title="Salvar Skin"></BiSave>
                    </a>
                    <a onClick={() => apagaUm(skin.id)} title="Apagar Skin">
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
