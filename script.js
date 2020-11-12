const box = new Array(9);

for(let i = 0; i < box.length; i++) {
    box[i] = document.querySelector("#box" + (i + 1));
    box[i].innerHTML = "1";
}

function oneToNine(x) {
    if(box[x].innerHTML === "9") box[x].innerHTML = "1";
    else box[x].innerHTML++;
}

const horizontal = new Array(3);
const vertical = new Array(3);
const diagonal = new Array(2);

function isFifteen() {

    let j = 0;
    for(let i = 0; i < horizontal.length; i++) {
        horizontal[i] = parseInt(box[j].innerHTML) + parseInt(box[j + 1].innerHTML) + parseInt(box[j + 2].innerHTML);
        vertical[i] = parseInt(box[i].innerHTML) + parseInt(box[i + 3].innerHTML) + parseInt(box[i + 6].innerHTML);
        j += 3;
    }

    diagonal[0] = parseInt(box[0].innerHTML) + parseInt(box[4].innerHTML) + parseInt(box[8].innerHTML);
    diagonal[1] = parseInt(box[2].innerHTML) + parseInt(box[4].innerHTML) + parseInt(box[6].innerHTML);

    if(horizontal[0] === 15 && horizontal[1] === 15 && horizontal[2] === 15 && vertical[0] === 15 && vertical[1] === 15 && vertical[2] === 15 && diagonal[0] === 15 && diagonal[1] === 15) {
        for(let i = 0; i < box.length; i++) {
            for(let j = 0; j < box.length; j++) {
                if(i === j) {
                    continue;
                }
                if(parseInt(box[i].innerHTML) === parseInt(box[j].innerHTML)) {
                    i = box.length;
                    break;
                }
                if(j === box.length - 2 && i === box.length - 1) {
                    alert("Mantul Bro!");
                }
            } 
        }
    }
}

function clicked1() {
    oneToNine(0);
    isFifteen();
} function clicked2() {
    oneToNine(1);
    isFifteen();
} function clicked3() {
    oneToNine(2);
    isFifteen();
} function clicked4() {
    oneToNine(3);
    isFifteen();
} function clicked5() {
    oneToNine(4);
    isFifteen();
} function clicked6() {
    oneToNine(5);
    isFifteen();
} function clicked7() {
    oneToNine(6);
    isFifteen();
} function clicked8() {
    oneToNine(7);
    isFifteen();
} function clicked9() {
    oneToNine(8);
    isFifteen();
}

const func = [clicked1, clicked2, clicked3, clicked4, clicked5, clicked6, clicked7, clicked8, clicked9];

for(let i = 0; i < func.length; i++) {
    box[i].onclick = func[i];
}