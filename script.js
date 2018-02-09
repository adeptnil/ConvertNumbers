let ones = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let hun = ["hundred"];
let tho = ['thousand'];

// let destination = document.getElementById("main");

for (var i = 0; i < ones.length; i++) {
    console.log(ones[i]);
    document.write(ones[i] + '<br>');
    // let newDiv = document.createElement("div");
    // newDiv.textContent = ones[i];
    // destination.appendChild(newDiv);
}

for (var i = 0; i < teens.length; i++) {
    console.log(teens[i]);
    document.write(teens[i] + '<br>');
}
//20's
for (var i = 0; i < 1; i++) {
    console.log(tens[0]);
    document.write(tens[0] + '<br>');
}

for (var i = 1; i < ones.length; i++) {
    console.log(tens[0] + '-' + ones[i]);
    document.write(tens[0] + '-' + ones[i] + '<br>');
}
//30's
for (var i = 0; i < 1; i++) {
    console.log(tens[1]);
    document.write(tens[1] + '<br>');
}

for (var i = 1; i < ones.length; i++) {
    console.log(tens[1] + '-' + ones[i]);
    document.write(tens[1] + '-' + ones[i] + '<br>');
}
//40's
for (var i = 0; i < 1; i++) {
    console.log(tens[2]);
    document.write(tens[2] + '<br>');
}

for (var i = 1; i < ones.length; i++) {
    console.log(tens[2] + '-' + ones[i]);
    document.write(tens[2] + '-' + ones[i] + '<br>');
}
//50's
for (var i = 0; i < 1; i++) {
    console.log(tens[3]);
    document.write(tens[3] + '<br>');
}

for (var i = 1; i < ones.length; i++) {
    console.log(tens[3] + '-' + ones[i]);
    document.write(tens[3] + '-' + ones[i] + '<br>');
}
//60's
for (var i = 0; i < 1; i++) {
    console.log(tens[4]);
    document.write(tens[4] + '<br>');
}

for (var i = 1; i < ones.length; i++) {
    console.log(tens[4] + '-' + ones[i]);
    document.write(tens[4] + '-' + ones[i] + '<br>');
}
//70's
for (var i = 0; i < 1; i++) {
    console.log(tens[5]);
    document.write(tens[5] + '<br>');
}

for (var i = 1; i < ones.length; i++) {
    console.log(tens[5] + '-' + ones[i]);
    document.write(tens[5] + '-' + ones[i] + '<br>');
}
//80's
for (var i = 0; i < 1; i++) {
    console.log(tens[6]);
    document.write(tens[6] + '<br>');
}

for (var i = 1; i < ones.length; i++) {
    console.log(tens[6] + '-' + ones[i]);
    document.write(tens[6] + '-' + ones[i] + '<br>');
}
//90's

    console.log(tens[7]);
    document.write(tens[7] + '<br>');


for (var i = 1; i < ones.length; i++) {
    console.log(tens[7] + '-' + ones[i]);
    document.write(tens[7] + '-' + ones[i] + '<br>');
}
//100's
for (var i = 0; i < hun.length; i++) {
    console.log(ones[1] + '-' + hun[i]);
    document.write(ones[1] + '-' + hun[i] + '<br>');
}
for (var i = 1; i < ones.length; i++) {
    console.log(ones[1] + '-' + hun[0]);
    document.write(ones[1] + '-' + hun[0] + '-' + ones[i] + '<br>');
}

//1000's
for (var i = 0; i < tho.length; i++) {
    console.log(ones[1] + tho[i]);
    document.write(ones[1] + '-' + tho[i] + '<br>')
}

