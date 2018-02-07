let ones = [" ", "one","two","three","four", "five", "six", "seven","eight","nine"]; 
let teens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
let tens = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
let hun = ["hundred"];
let tho = ['thousand'];

let destination = document.getElementById("main");

    for(var i = 0; i < ones.length; i++){
        console.log(ones[i]);
        //document.write(ones[i] + '<br>'); 
        let newDiv = document.createElement("div");
        newDiv.textContent = ones[i];
        destination.appendChild(newDiv);
    }

    for(var i =0; i < teens.length; i++){
    console.log(teens[i]);
    let newDiv = document.createElement("div");
    newDiv.textContent = teens[i];
    destination.appendChild(newDiv);
    }

    for(var i =0; i < 1; i++){
        console.log(tens[0] + '-' + ones[i]);
        let newDiv = document.createElement("div");
    newDiv.textContent = tens[i];
    destination.appendChild(newDiv);    
    }

    for(var i =0; i < tens.length; i++){
    document.write(ones[i] + '<br>');    
        console.log(tens[0] + '-' + ones[i]);
        let newDiv = document.createElement("div");
    newDiv.textContent = tens[i];
    destination.appendChild(newDiv);    
    }





    for(var i =0; i < hun.length; i++){
        console.log(hun[i]);
        }
    for(var i =0; i < tho.length; i++){
        console.log(tho[i]);
        }


    // for(var i = 0; i < 9; i++ ) {
    //     console.log (tens[0] + ' ' + ones[i])
    // }
               






// const rollCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//         document.createElement("div")
//         const destination = document.getElementById("main");
//         function roll() {
//             for (i = 0; i <= 1000; i++) {
//                 let one = Math.ceil(Math.random() * 6);
//                 let two = Math.ceil(Math.random() * 6);
//                 
//                 one + two += 1;
            
//             } 
//             console.log(rollCount);
//             for (let j = 2; j <= 12; j++) {
//                 let newDiv = document.createElement("div");
    
                
//                 var newText = document.createTextNode("#" + (j) + ": " +  rollCount[j]);
//                 newDiv.appendChild(newText);
                
//                 destination.appendChild(newDiv);
               
//             }
//         }
//         roll();
//      console.log(roll());
