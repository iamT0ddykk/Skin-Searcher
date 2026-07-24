const area = document.querySelector(".fetch-area");
const inpt = document.querySelector("#digite");
const butao = document.querySelector(".ir");
const img = document.createElement("img");
const cabeca = document.createElement("img");
const link = document.createElement("a");
link.innerText = "Baixar Skin";

img.className = "skin1";
cabeca.className = "skin2";
link.className = "skin3";

async function skin(nome) {
  const fetar = await fetch(`https://mineskin.eu/armor/body/${nome}/100.png`);
  const fetarCabeca = await fetch(`https://mineskin.eu/helm/${nome}`);
  const downloadLink = await fetch(`https://mineskin.eu/download/${nome}`);

  const a = fetar.url;
  const b = fetarCabeca.url;
  const c = downloadLink.url;

  img.src = a;
  cabeca.src = b;
  link.href = c;

  area.appendChild(img);
  area.appendChild(cabeca);
  area.appendChild(link);
}

butao.addEventListener("click", () => {
  skin(inpt.value);
});

