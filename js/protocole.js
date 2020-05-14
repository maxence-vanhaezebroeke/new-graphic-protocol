let img;
let chaineEspacee = "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01100111 01101001 01110100 01101000 01110101 01100010 00101110 01100011 01101111 01101101 00101111 01101101 01100001 01111000 01100101 01101110 01100011 01100101 00101101 01110110 01100001 01101110 01101000 01100001 01100101 01111010 01100101 01100010 01110010 01101111 01100101 01101011 01100101";
let chaineNonHamming = "0110100001110100011101000111000001110011001110100010111100101111011001110110100101110100011010000111010101100010001011100110001101101111011011010010111101101101011000010111100001100101011011100110001101100101001011010111011001100001011011100110100001100001011001010111101001100101011000100111001001101111011001010110101101100101";

require(['js/hamming'], function (hamming) {
    console.log(hamming.encode(chaine));
});

let chaine = "1100110010000111101000111010001011000001110011001110100010111101010111101100111011010010111010001101000011101010110001000101110101100011011011110110110100101111011011010110000101111000011001010110111001100011011001010010110101110110011000010110111001101000001100001011001010111101001100101011000100111001001101111011001010110101101100101";

let iterateur = chaine[Symbol.iterator]();
let caractere = iterateur.next();

function setup() {
    createCanvas(1344, 756);
    img = loadImage('img/wpp1.jpg');
    //img2 = loadImage('img/wpp2.jpg');
}

function draw() {

    let couleur = color(0);
    let red = color(255, 0, 0);

    image(img, 0, 0, 1340, 756);

    //x for the height
    for (let x = 0; x < 740; x += 20) {
        //w for the width
        for (let w = 0; w < width - 14; w += 20) {
            if (!caractere.done && caractere.value == "1") {
                //we need to draw every 20 pixels height
                for (let j = x; j < x + 20; j++) {
                    //and every 20 pixels width
                    for (let k = 0; k < 20; k++) {
                        set(w + k, j, couleur);
                    }
                }
            }
            caractere = iterateur.next();
        }
    }

    updatePixels();
}