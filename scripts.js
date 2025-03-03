var expression2 = "";

function display1(val) {
    var x = document.getElementById("expression1").value;
    var n = x.length - 1;
    if (check == 0 && ((x[n] == ")" || x[n] == "!" || x[n] == "π" || x[n] == "e" || x[n] == "\u00B2" || x[n] == "%") && (val == 0 || val == 1 || val == 2 || val == 3 || val == 4 || val == 5 || val == 6 || val == 7 || val == 8 || val == 9))) {
        multiply();
    }
    if (check == 1 && val == ")") {
        clr();
    }
    else {
        display2(val);
        display3(val);
    }
}

