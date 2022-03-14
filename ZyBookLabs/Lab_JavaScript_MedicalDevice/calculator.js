function updateScore() {
	let inputNames = ["AV", "AC", "PR", "UI", "scope", "conf", "integ", "avail", "health", "sens"];
  let inputValues = [];
  let allSelected = true;

    for(let inputName of inputNames) {
        let groupSelected = false;
        let buttons = document.querySelectorAll('[name=' + inputName + ']');
        for (let button of buttons) {
            if (button.checked == true) {
                groupSelected = true;
                inputValues.push(button.value);
                break;
            }
        }
        if (groupSelected == false) {
            allSelected = false;
        }
    }
    if (allSelected) {
        let attackVector = {
            "AV_N": 0.85,
            "AV_A": 0.62,
            "AV_L": 0.55,
            "AV_P": 0.22,
        };
        let attackComplexity = {
            "AC_L": 0.77,
            "AC_H": 0.44,
        };
        let privelegeRequired = {
            "PR_N": 0.85,
            "PR_L": 0.62,
            "PR_H": 0.27,
        };
        let userInteraction = {
            "UI_N": 0.85,
            "UI_R": 0.62,
        };
        let scope = {
            "scope_U": 1.0,
            "scope_C": 1.08,
        };
        let scoreExp = attackVector[inputValues[0]] * attackComplexity[inputValues[1]] * privelegeRequired[inputValues[2]] * userInteraction[inputValues[3]];
        let scopeStatus = scope[inputValues[4]];
        let sensConf = {
            "sens_Nconf_N": 0,
            "sens_Lconf_N": 0,
            "sens_Hconf_N": 0,
            "sens_Nconf_L": 0.22,
            "sens_Lconf_L": 0.65,
            "sens_Hconf_L": 0.85,
            "sens_Nconf_H": 0.56,
            "sens_Lconf_H": 0.75,
            "sens_Hconf_H": 0.95,
        };
        let healthInteg = {
            "health_Ninteg_N": 0.00,
            "health_Linteg_N": 0.55,
            "health_Hinteg_N": 0.85,
            "health_Ninteg_L": 0.22,
            "health_Linteg_L": 0.60,
            "health_Hinteg_L": 0.90,
            "health_Ninteg_H": 0.56,
            "health_Linteg_H": 0.75,
            "health_Hinteg_H": 0.95,
        };
        let healthAvail = {
            "health_Navail_N": 0.00,
            "health_Lavail_N": 0.55,
            "health_Havail_N": 0.85,
            "health_Navail_L": 0.22,
            "health_Lavail_L": 0.60,
            "health_Havail_L": 0.90,
            "health_Navail_H": 0.56,
            "health_Lavail_H": 0.65,
            "health_Havail_H": 0.95,
        };
        let scoreBase = sensConf[inputValues[9] + inputValues[5]] +
            healthInteg[inputValues[8] + inputValues[6]] +
            healthAvail[inputValues[8] + inputValues[7]];
        let scoreFinal;
        if (scoreBase == 0) {
            scoreFinal = 0;
        } else {
            scoreFinal = scopeStatus * ((3.326258289 * scoreBase) + (1.1 * scoreExp));
        }
        if (scoreFinal < 0){
            scoreFinal = 0;
        } else if (scoreFinal > 10){
            scoreFinal = 10;
        }
        scoreFinal = Math.ceil(scoreFinal * 10) / 10;
        scoreFinal = scoreFinal.toFixed(1);
        document.getElementById("score").textContent = scoreFinal;
        document.getElementById("warning").style.setProperty("display", "none");
    }
}
let allInputs = document.querySelectorAll("input");

	for (let input of allInputs) {
    input.addEventListener("click", updateScore);
}
