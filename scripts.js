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

function display2(val) {
    if (check == 1) {
        if (val == '0' || val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9' || val == "(" || val == ")" || val == "sin(" || val == "cos(" || val == "tan(" || val == "log(" || val == "ln(" || val == "π" || val == "e" || val == "√(" || val == "abs(") {
            clr();
        }
        else if (expression2 == "Error" || expression2 == "NaN") {
            clr();
        }
        else {
            check = 0;
        }
    }
    var m = document.getElementById("expression1");
    m.value += val;
    scroll_right();
}

function display3(val) {
    if (check == 1) {
        if (val == '0' || val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9' || val == "(" || val == ")" || val == "sss(" || val == "ccc(" || val == "ttt(" || val == "lll(" || val == "jj(" || val == Math.PI || val == Math.E || val == "√(" || val == "aaa(") {
            clr();
        }
        else if (expression2 == "Error" || expression2 == "NaN") {
            clr();
        }
        else {
            check = 0;
        }
    }
    expression2 += val;
    scroll_right();
}

function solve() {
    check = 1;
    var x = document.getElementById("expression1").value;
    var o = expression2.indexOf('!');
    if (o > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == '!') {
                if (expression2[k - 1] == ')') {
                    var i = k - 1;
                    while (expression2[i] != '(') {
                        i = i - 1;
                    }
                    if (expression2[i] == ".") {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression1").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                    var n = eval(expression2.substring(i, k));
                    var ans = 1;
                    for (var j = 1; j <= n; j++) {
                        ans = ans * j;
                    }
                    expression2 = expression2.substring(0, i) + String(ans) + expression2.substring(k + 1, expression2.length);
                    if ((ans == 1 && n != 0 && n != 1)) {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression1").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                }
                else {
                    var i = k - 1;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9) {
                        i = i - 1;
                    }
                    if (expression2[i] == ".") {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression1").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                    var n = eval(expression2.substring(i + 1, k));
                    var ans = 1;
                    for (var j = 1; j <= n; j++) {
                        ans = ans * j;
                    }
                    expression2 = expression2.substring(0, i + 1) + String(ans) + expression2.substring(k + 1, expression2.length);
                    if ((ans == 1 && n != 0 && n != 1)) {
                        var history = document.getElementById("history");
                        history.value += "\n" + x + " = " + 'Error' + "\n" + "Factorial function is defined for non-negative integers.";
                        document.getElementById("expression1").value = "Error";
                        expression2 = "Error";
                        gfg_Run();
                    }
                }
            }
        }
    }

    var p = expression2.indexOf('√');
    if (p > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == '√') {
                if (expression2[k + 1] == '(') {
                    var i = k + 2;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }
                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 2, i));
                    var ans = Math.pow(n, 0.5);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 1, expression2.length);

                }
                else {
                    var i = k + 1;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9 || expression2[i] == ".") {
                        i = i + 1;
                    }
                    var n = eval(expression2.substring(k + 1, i));
                    var ans = Math.pow(n, 0.5);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i, expression2.length);
                }
            }
        }
    }

    var q = expression2.indexOf('s');
    if (q > -1) {
        for (var k = 0; k < expression2.length; k++) {
            if (expression2[k] == 's') {
                if (expression2[k + 3] == '(') {
                    var i = k + 4;
                    while (expression2[i] != ')' && i != expression2.length) {
                        i = i + 1;
                    }
                    if (i == expression2.length && expression2[i] != ')') {
                        x += ")";
                    }

                    var n = eval(expression2.substring(k + 4, i));
                    var ans = Math.sin((n / 180) * Math.PI);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i + 1, expression2.length);

                }
                else {
                    var i = k + 3;
                    while (expression2[i] == 0 || expression2[i] == 1 || expression2[i] == 2 || expression2[i] == 3 || expression2[i] == 4 || expression2[i] == 5 || expression2[i] == 6 || expression2[i] == 7 || expression2[i] == 8 || expression2[i] == 9 || expression2[i] == ".") {
                        i = i + 1;
                    }
                    var n = eval(expression2.substring(k + 3, i));
                    var ans = Math.sin((n / 180) * Math.PI);
                    expression2 = expression2.substring(0, k) + String(ans) + expression2.substring(i, expression2.length);
                }
            }
        }
    }

    