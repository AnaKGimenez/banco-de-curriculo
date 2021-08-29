/* Valida data */
var ysel = document.getElementsByName("year")[0],
    msel = document.getElementsByName("month")[0],
    dsel = document.getElementsByName("day")[0];

    for (var i = 2021; i >= 1900; i--) {
    var opt = new Option();
    opt.value = opt.text = i;
    ysel.add(opt);
}

ysel.addEventListener("change", validate_date);
msel.addEventListener("change", validate_date);

function validate_date() {
    var y = +ysel.value, m = msel.value, d = dsel.value;

    if (m === "2")
        var mlength = 28 + (!(y & 3) && ((y % 100) !== 0 || !(y & 15)));
    else var mlength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
    dsel.length = 0;
    for (var i = 1; i <= mlength; i++) {
        var opt = new Option();
        opt.value = opt.text = i;
        if (i == d) opt.selected = true;
        dsel.add(opt);
    }
}

validate_date();