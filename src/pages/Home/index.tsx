import { useContext, useState } from "react";
import "./home.css";
import { BiDownload, BiHeart, BiSave } from "react-icons/bi";
import { type SkinData } from "../../models/skinDataModel";
import { SkinContext } from "../../context/SkinContext";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { MdSearchOff } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
export function Home() {
  const [username, setUsername] = useState<string>("");
  const [skinData, setSkinData] = useState<SkinData | null>(null);

  const { listaskin, setListaskin } = useContext(SkinContext);

  const handleSearch = async () => {
    if (!username.trim()) {
      toast.error("Digite um nick", {
        position: "top-right", // Posição: 'top-left', 'top-center', 'bottom-right', etc.
        autoClose: 2000, // Tempo em milissegundos para fechar (3s)
        hideProgressBar: false, // Ocultar a barra de progresso
        theme: "dark", // Tema: 'light', 'dark', 'colored'
        icon: <MdSearchOff size={20} color="red" />,
      });
      return;
    }
    if (username.trim().length <= 2) {
      toast.error("Nick muito curto!", {
        position: "top-right", // Posição: 'top-left', 'top-center', 'bottom-right', etc.
        autoClose: 2000, // Tempo em milissegundos para fechar (3s)
        hideProgressBar: false, // Ocultar a barra de progresso
        theme: "dark", // Tema: 'light', 'dark', 'colored'
        icon: <MdSearchOff size={20} color="red" />,
      });
      return;
    }
    if (username.trim().length > 16) {
      toast.error("Nick muito longo!", {
        position: "top-right", // Posição: 'top-left', 'top-center', 'bottom-right', etc.
        autoClose: 2000, // Tempo em milissegundos para fechar (3s)
        hideProgressBar: false, // Ocultar a barra de progresso
        theme: "dark", // Tema: 'light', 'dark', 'colored'
        icon: <MdSearchOff size={20} color="red" />,
      });
      return;
    }

    const aid = Date.now().toString();

    setSkinData({
      bodyUrl: `https://mineskin.eu/armor/body/${username}/100.png`,
      headUrl: `https://mineskin.eu/helm/${username}`,
      downloadUrl: `https://mineskin.eu/download/${username}`,
      user: username,
      id: aid,
    });

    const newSkin: SkinData = {
      bodyUrl: `https://mineskin.eu/armor/body/${username}/100.png`,
      headUrl: `https://mineskin.eu/helm/${username}`,
      downloadUrl: `https://mineskin.eu/download/${username}`,
      user: username,
      id: aid,
    };
    console.log(listaskin);
    setListaskin((prev) => [...prev, newSkin]);
  };

  return (
    <>
      <div className="texts-area">
        {" "}
        <h1>Skin Searcher</h1>
        <nav>
          {" "}
          <Link
            className="gotohistory"
            to={"/history"}
            title="Ir para o Historico"
          >
            <FaHistory size={30} />
          </Link>
          <Link className="gotohistory" to={"/saved"} title="Ir para os Salvos">
            <BiHeart size={32} />
          </Link>
        </nav>
      </div>

      <div className="fetch-area">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name=""
          id="digite"
          placeholder="Digite o nome..."
        />
        <button className="ir" onClick={handleSearch}>
          Pesquisar
        </button>

        <div className="dataArea">
          {skinData && (
            <>
              <img src={skinData.bodyUrl} alt="" />
              <img src={skinData.headUrl} alt="" />
              <a href={skinData.downloadUrl}>
                Baixar <BiDownload></BiDownload>
              </a>
              <a>
                Salvar <BiSave></BiSave>
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
