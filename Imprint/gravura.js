var causes = [
  "Ao usar Habilidades Ativas",
  "Ao usar Habilidades de Bravura",
  "Ao usar Habilidades de Tenacidade",
  "Ao usar Habilidades de Força",
  "Ao usar Habilidades Hiper Ativas",
  "Ao usar Habilidades Ativas Especiais",
  "Ao usar Habilidade Mestra de Estágio 3, 4",
  "Ao usar Habilidade Mestra de Estágio 1, 2",
  "Ao usar Habilidade Mestra",
  "Ao usar comandos ou Habilidades Ativas",
  "Ao pressionar a tecla de despertar",
  "Ao ser derrubado",
  "Ao levantar",
  "Ao saltar",
  "Ao correr",
  "Ao derrotar um monstro",
  "Ao atacar monstros derrubados",
  "Ao receber desvantagens",
  "Ao ativar a Vantagem de Slot de Habilidade Transcendente",
  "Ao ser atacado por chefes",
  "Ao ser atacado",
  "Ao usar consumíveis",
  "Ao receber ED",
  "A cada 10 segundos",
  "A cada 20 segundos",
  "A cada 30 segundos",
  "Quando o HP está abaixo de 10%",
  "Quando o HP está abaixo de 30%",
  "Ao recuperar 50% HP",
  "Quando o HP está abaixo de 50%",
  "Ao recuperar 70% HP",
  "Ao recuperar 90% HP",
  "Quando o MP está abaixo de 10%",
  "Quando o MP está abaixo de 30%",
  "Ao recuperar 50% MP",
  "Quando o MP está abaixo de 50%",
  "Ao recuperar 70% MP",
  "Ao recuperar 90% MP",
  "A cada 10 segundos fora de combate",
  "A cada 15 segundos fora de combate",
  "A cada 5 segundos fora de combate",
  "Ao acertar comandos ou Habilidades Ativas 10 vezes",
  "Ao acertar comandos ou Habilidades Ativas 20 vezes",
  "Ao usar Habilidade de Mascote",
  "Ao atacar inimigos com 10% HP ou superior",
  "Ao atacar inimigos com 30% HP ou superior",
  "Ao atacar inimigos com 50% HP ou superior",
  "Ao atacar inimigos com 70% HP ou superior",
  "Ao atacar inimigos com 90% HP ou superior",
  "A cada 25 segundos",
  "Quando o MP está abaixo de 20%",
  "Quando o HP está abaixo de 20%",
  "Ao recuperar 80% HP",
  "Ao recuperar 80% MP",
  "Ao atacar inimigos com 80% HP ou superior",
  "Ao acertar comandos ou Habilidades Ativas 25 vezes",
  "Ao acertar comandos ou Habilidades Ativas 15 vezes",
  "Ao usar Habilidade Mestra de Estágio 1",
  "Ao usar Habilidade Mestra de Estágio 2",
  "A cada 15 segundos",
  "Quando o MP está abaixo de 40%",
  "Quando o HP está abaixo de 40%",
  "Ao recuperar 60% HP",
  "Ao recuperar 60% MP",
  "Ao atacar inimigos com 60% HP ou superior",
  "Ao atacar inimigos com 40% HP ou superior",
  "Ao usar Habilidade Mestra de Estágio 3",
  "Ao usar Habilidade Mestra de Estágio 4",
  "Quando o MP está abaixo de 60%",
  "Quando o HP está abaixo de 60%",
  "Ao recuperar 40% HP",
  "Ao recuperar 40% MP",
  "Ao atacar inimigos com 20% HP ou superior",
];
var chances = [
  "1%",
  "2%",
  "3%",
  "4%",
  "5%",
  "6%",
  "7%",
  "8%",
  "9%",
  "10%",
  "11%",
  "12%",
  "13%",
  "14%",
  "15%",
  "16%",
  "17%",
  "18%",
  "19%",
  "20%",
  "21%",
  "22%",
  "23%",
  "24%",
  "25%",
  "26%",
  "27%",
  "28%",
  "29%",
  "30%",
  "[3 * Nível de Aprimoramento]",
];
var raidwpn = false;
var causeremoved = 0;
var effectremoved = 0;
var cause2removed = 0;
var effect2removed = 0;
var causelist = document.getElementById("causelist");
var chancelist = document.getElementById("chancelist");
var effectlist = document.getElementById("effectlist");
var causelist2 = document.getElementById("causelist2");
var chancelist2 = document.getElementById("chancelist2");
var effectlist2 = document.getElementById("effectlist2");

function populate(menu, list) {
  var sel = document.getElementById(menu);
  var frag = document.createDocumentFragment();
  list.forEach(function (content, index) {
    var opt = document.createElement("option");
    opt.innerHTML = content;
    opt.value = content;
    frag.appendChild(opt);
  });
  sel.appendChild(frag);
}

function weaponselect() {
  var selectscreen1 = document.getElementById("efeito1");
  var selectscreen2 = document.getElementById("efeito2");
  var confirm = document.getElementById("confirm");
  if (document.getElementById("void").checked == true) {
    raidwpn = false;
    selectscreen1.style.display = "inline-block";
    selectscreen2.style.display = "none";
    confirm.style.display = "inline-block";
  } else if (document.getElementById("flame").checked == true) {
    raidwpn = true;
    selectscreen1.style.display = "inline-block";
    selectscreen2.style.display = "inline-block";
    confirm.style.display = "inline-block";
  }
}

function writeresult() {
  var causestring = causelist.options[causelist.selectedIndex].text;
  var chancestring = chancelist.options[chancelist.selectedIndex].text;
  var effectstring = effectlist.options[effectlist.selectedIndex].text;
  var causestring2 = causelist2.options[causelist2.selectedIndex].text;
  var chancestring2 = chancelist2.options[chancelist2.selectedIndex].text;
  var effectstring2 = effectlist2.options[effectlist2.selectedIndex].text;
  document.getElementById("result").innerHTML = "";
  document.getElementById("result2").innerHTML = "";

  if (
    causestring == "|| Selecione a Causa ||" ||
    chancestring == "|| Selecione a Chance ||" ||
    effectstring == "|| Selecione o Efeito ||"
  ) {
    alert("Selecione todos os parâmetros da Gravura.");
    return;
  } else {
    document.getElementById("result").innerHTML =
      "" +
      causestring +
      ", há " +
      chancestring +
      " de chance de " +
      effectstring +
      ".";
  }

  if (raidwpn == false) return;

  if (
    raidwpn == true &&
    (causestring2 == "|| Selecione a Causa ||" ||
      chancestring2 == "|| Selecione a Chance ||" ||
      effectstring2 == "|| Selecione o Efeito ||")
  ) {
    alert("Selecione todos os parâmetros da Gravura.");
    return;
  } else {
    document.getElementById("result2").innerHTML =
      "" +
      causestring2 +
      ", há " +
      chancestring2 +
      " de chance de " +
      effectstring2 +
      ".";
  }
}

function disableEffectCategory(effect, list){
    var op = document.getElementById(list).getElementsByTagName("option");
    for (var i = 0; i < op.length; i++) {
        if (op[i].value == effect) {
            op[i].disabled = true;
        } else {
            op[i].disabled = false;
        }
    }
}

window.onload = () => {
  populate("causelist", causes);
  populate("chancelist", chances);
  populate("causelist2", causes);
  populate("chancelist2", chances);

  causelist.onchange = function () {
    causelist2[cause2removed].disabled = false;
    var selected = causelist.selectedIndex;
    causelist2[selected].disabled = true;
    cause2removed = selected;
  };
  causelist2.onchange = function () {
    causelist[causeremoved].disabled = false;
    var selected = causelist2.selectedIndex;
    causelist[selected].disabled = true;
    causeremoved = selected;
  };
  effectlist.onchange = function () {
    var selected = effectlist.value;
    disableEffectCategory(selected, "effectlist2")
  };
  effectlist2.onchange = function () {
    var selected = effectlist2.value;
    disableEffectCategory(selected, "effectlist")
  };
};
