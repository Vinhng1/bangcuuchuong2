let a = "";
let i = 0;
for (; i < 5 ;i++) {
    for (j = 5; j > i; j--) {
        a += "*"
    }
    a += "\n";
}
document.write("<pre>" + a + "</pre>");