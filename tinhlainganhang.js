function bai5() {
    let sotien = +prompt("nhap so tien gui ngan hang 5%/nam" );
    let sothang = +prompt("nhap so thang gui tien ")
    let tienlai_thang = 0;
    let tongtienlai = tienlai_thang;
    document.write(" so tien ban gui la " + sotien + " vnd trong " + sothang + " thang lai suat 5%/nam " + "<br>")
    for (let i = 0; i < sothang; i++) {
        tienlai_thang += ((sotien * 5) / 100) / 12;
        tongtienlai += tienlai_thang;
        sotien += tienlai_thang;
        document.write(" tien lai thang " + (i + 1) + " la " + tienlai_thang.toFixed(0) + " vnd<br> ")

    }
    document.write("tong tien lai cua ban trong" + sothang + " la " + tongtienlai.toFixed(0) + " vnd ")
}