let finCodes = ["123ABCD","QW23PT2","BJ78NW1","RTY678Z","PBJ78P3"];

let regexFIN = new RegExp("[A-Z0-9]{7}");
let finData;
let userFound = false;

finData = window.prompt("enter fin code!");
do {
    if (regexFIN.test(finData)) {
        for (let index = 0; index < finCodes.length; index++) {
            if (finCodes[index]===finData) {
                 window.alert("user found: "+index);
                 userFound = true;
                 break;
            }   
        }
        if (userFound===false)
            finData = window.prompt("user not found, try again!");
    }
    else
        finData = window.prompt("format is not correct, try again!");

} while (!regexFIN.test(finData) || !userFound);