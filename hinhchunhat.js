let a = "";
let width = 15;
let height = 5;
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        if ( i === 0 || i === height - 1 || j === 0 || j === width - 1 ) {
            a += "*";
        } else {
        a += " ";
        }
    }

    a += "\n"
}
document.write("<pre>" + a + "</pre>")