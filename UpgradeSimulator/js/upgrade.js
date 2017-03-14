////  UPGRADE SIMULATOR - By Firest (BR: Infelphira/Eolia/Nayudara) (elswordplayers.com.br)
//// Credits to Elsword JP wiki for most of the formulae and class attack bases and extras, except for Erbluhen Emotion


// Init
var cBaseF = 0; //Class Base Physatk
var cExtraF = 0; //Class Extra Physatk
var cBaseM = 0; //Class Base Magicatk
var cExtraM = 0; //Class Extra Magicatk
var bonusP = 0; //Weapon Id Bonus Physatk
var bonusM = 0; //Weapon Id Bonus Magicatk
var weapon = 0; //Weapon type
var upgradeLv = 0; //Weapon Upgrade Level
var weaponAttackP = 0; //Final Weapon Physatk
var weaponAttackM = 0; //Final Weapon Magicatk
var heroLv = 0; //Hero Level
var weaponName1 = "INV"; //Weapon Name 1
var weaponName2 = "INV"; //Weapon Name 2
var weaponType = "INV"; //Weapon Type
var apocalypse = 0; //Is the weapon Apocalypse Type-Void?

function init(){
cBaseF = 0;
cExtraF = 0;
cBaseM = 0;
cExtraM = 0;
bonusP = 0;
bonusM = 0;
weapon = 0;
upgradeLv = 0;
weaponAttackP = 0;
weaponAttackM = 0;
heroLv = 0;
weaponName1 = "INV";
weaponName2 = "INV";
weaponType = "INV";
apocalypse = 0;
}

function getClass(form){
	var classAtk = form.characterclass.value;
	classAtk = classAtk.split("/");
	cBaseF = +classAtk[0];
	cExtraF = +classAtk[1];
	cBaseM = +classAtk[2];
	cExtraM = +classAtk[3];
	weaponType = classAtk[4];
}

function getWeapon(form){
	var typeWeapon = form.weapontype.value;
	typeWeapon = typeWeapon.split("/");
	weapon = +typeWeapon[0];
	weaponName1 = typeWeapon[2];
	weaponName2 = typeWeapon[3];
	$('#weaponid').css('color', typeWeapon[4]);
	$('#resultarea').css('display', 'none');
	heroLv = 0;
	apocalypse = 0;
	if (typeWeapon[1] == "H") {
		var i=window.prompt("Poder Heróico da Arma (1~29):",1);
		if(isNaN(i)){i=0;}
		heroLv = parseInt(i);
		form.bonusP.value = 0;
		form.bonusM.value = 0;
	} else if (typeWeapon[1] == "V") {
		var i=window.prompt("Nível da Apocalypse Type-VOID (1~15):",1);
		apocalypse = 1;
		if(isNaN(i)) {i=1;}
		if (i>=5) {
		form.bonusP.value = 3;
		form.bonusM.value = 3;
		}
	} else {
		form.bonusP.value = +typeWeapon[1];
		form.bonusM.value = +typeWeapon[1];
	}
}

function upgrade(upg) {
	var upgFinal = 1;
	var temp = 0;
	if(isNaN(upg)||!isFinite(upg)){
		return NaN;
	}
	do
	{
		temp++;
		if(temp>upg){
			return Math.round(upgFinal*100)/100;
		}
		else if(temp<=3){upgFinal+=0.03;}
		else if(temp<=6){upgFinal+=0.07;}
		else if(temp<=9){upgFinal+=0.15;}
		else if(temp<=14){upgFinal+=0.4;}
		else if(temp<=18){upgFinal+=0.5;}
		else if(temp<=19){upgFinal+=1;}
		else if(temp>19){upgFinal+=2;}
	}
	while(temp<20);
}


function calcWpn(form){
	var baseWeaponP = 0;
	var baseWeaponM = 0;
	var inputUpg = +form.upgradeLv.value;
	bonusP = +form.bonusP.value;
	bonusM = +form.bonusM.value;
	upgradeLv = upgrade(inputUpg);
	
	if (apocalypse == 1&&inputUpg >= 10) {
		form.bonusP.value = bonusP + 10;
		form.bonusM.value = bonusM + 10;
		bonusP = bonusP + 10;
		bonusM = bonusM + 10;
		apocalypse = 0;
	}
	
	baseWeaponP = Math.round(cBaseF + (weapon + (bonusP + heroLv)) * cExtraF);
	baseWeaponM = Math.round(cBaseM + (weapon + (bonusM + heroLv)) * cExtraM);
	weaponAttackP = Math.floor(baseWeaponP * upgradeLv);
	weaponAttackM = Math.floor(baseWeaponM * upgradeLv);

	 console.log(weaponAttackP);
	 console.log(weaponAttackM);
	 if (isNaN(weaponAttackP)||isNaN(weaponAttackM)||weaponAttackP == 0||weaponAttackM == 0||weaponName1 == "INV"||weaponType == "INV") {
	 window.alert("Algo deu muito errado. Verifique os valores inseridos.")
	 } else {
	$('#resultarea').css('display', 'block');
	$('#weaponid').text(weaponName1+weaponType+weaponName2+" +"+inputUpg);
	$('#weaponPhys').text(weaponAttackP);
	$('#weaponMag').text(weaponAttackM);
	 }
}

function resetCalc(form){
	$("#calcform")[0].reset();
	$('#resultarea').css('display', 'none');
	init();
}