const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogiodig = setInterval(function time() {
  let dateToday = new Date();
  // let hr = dateToday.getHours();
  // let min = dateToday.getMinutes();
  // let seg = dateToday.getSeconds();

  const dataform = document.getElementsByClassName("relogio");
  const novadata = dateToday.toLocaleString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const regexData = /(\d{2}):(\d{2}):(\d{2})(.*)/.exec(novadata);
  let horasArr = novadata.split(":");

  // if (hr < 10) hr = "0" + hr;
  // if (min < 10) min = "0" + min;
  // if (seg < 10) seg = "0" + seg;

  // console.log("TESTE....", regexData[4].trim());

  horas.textContent = regexData[1];
  minutos.textContent = regexData[2];
  segundos.textContent = regexData[3];
}, 1000);
