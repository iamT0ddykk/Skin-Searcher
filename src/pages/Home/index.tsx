import { useContext, useState } from "react";
import "./home.css";
import { BiDownload, BiHeart, BiSave } from "react-icons/bi";
import { type SkinData } from "../../models/skinDataModel";
import { SkinContext } from "../../context/SkinContext";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { MdSearchOff } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { SavedContext } from "../../context/SaveContext";
export function Home() {
  const [username, setUsername] = useState<string>("");
  const [skinData, setSkinData] = useState<SkinData | null>(null);

  const { setListasave } = useContext(SavedContext);

  const { setListaskin } = useContext(SkinContext);

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
    if (username === "!/ecila/") {
      toast.error("", {
        position: "top-right", // Posição: 'top-left', 'top-center', 'bottom-right', etc.
        autoClose: 2000, // Tempo em milissegundos para fechar (3s)
        hideProgressBar: false, // Ocultar a barra de progresso
        theme: "dark", // Tema: 'light', 'dark', 'colored'
        icon: <BiHeart size={20} color="red" />,
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

    setListaskin((prev) => {
      const newList = [...prev, newSkin];

      localStorage.setItem("historico", JSON.stringify(newList));

      return newList;
    });
  };

  function handleSave() {
    const aid = Date.now().toString();
    const newSkin: SkinData = {
      bodyUrl: `https://mineskin.eu/armor/body/${username}/100.png`,
      headUrl: `https://mineskin.eu/helm/${username}`,
      downloadUrl: `https://mineskin.eu/download/${username}`,
      user: username,
      id: aid,
    };

    setListasave((prev) => [...prev, newSkin]);
    toast.success("Skin Salva...", {
      position: "top-right", // Posição: 'top-left', 'top-center', 'bottom-right', etc.
      autoClose: 2000, // Tempo em milissegundos para fechar (3s)
      hideProgressBar: false, // Ocultar a barra de progresso
      theme: "dark", // Tema: 'light', 'dark', 'colored'
    });
  }

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
          <Link className="gotosaved" to={"/saved"} title="Ir para os Salvos">
            <BiHeart size={30} />
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
              <div className="opt-area">
                <a href={skinData.downloadUrl} title="Baixar Skin">
                  <BiDownload size={40}></BiDownload>
                </a>
                <a className="saveBtn" onClick={handleSave} title="Salvar Skin">
                  <BiSave size={40}></BiSave>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
