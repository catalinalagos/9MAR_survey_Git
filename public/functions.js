function continuousFeedback(string) {
    //FEEDBACK FROM ANY KEY PRESSED
    var angulo = 0.2;
    var rad = 50;
    var dotColor = 255;
    var dotOpacity = 255;

    //translate(width / 2, height / 2);
    noStroke();
    for (var letter = 0; letter < string.length; letter++) {
        if (string[letter] == 'a' || string[letter] == 'e' || string[letter] == 'h' || string[letter] == 'i' || string[letter] == 'n' || string[letter] == 'o' || string[letter] == 'r' || string[letter] == 's' || string[letter] == 't') {
            fill(dotColor, dotOpacity);
            dotSize = 3;
        }
        //frequent letters (2-6%)
        else if (string[letter] == 'c' || string[letter] == 'd' || string[letter] == 'f' || string[letter] == 'g' || string[letter] == 'l' || string[letter] == 'm' || string[letter] == 'u' || string[letter] == 'w' || string[letter] == 'y') {
            fill(dotColor, dotOpacity);
            dotSize = 6;
        }
        //rare letters (less than 2% frequency in english)
        else if (string[letter] == 'b' || string[letter] == 'j' || string[letter] == 'k' || string[letter] == 'p' || string[letter] == 'v' || string[letter] == 'x') {
            dotSize = 9;
            fill(dotColor, dotOpacity);
        }
        //Extremely rare letters (less than 0.1% frequency in english)
        else if (string[letter] == 'q' || string[letter] == 'z') {
            dotSize = 11;
            fill(dotColor, dotOpacity);
        }
        //any other character that is not a letter
        else {
            //fill background color
            noFill();
            dotSize = 9;
        }
        //CIRCLE (SPIRAL) SHAPE
        rotate(angulo);
        ellipse(rad, rad, dotSize, dotSize);
        rad = 30 + letter * 0.12;
    }
}

function backgroundGradient(colorArray) {
    //create a gradient from 1 color (from lighter to darker)
    let c1 = color(colorArray[0] + 150, colorArray[1] + 150, colorArray[2] + 150);
    let c2 = color(colorArray[0], colorArray[1], colorArray[2]);
    for (let y = 0; y < height; y++) {
        n = map(y, 0, height, 0, 1);
        let newc = lerpColor(c1, c2, n);
        stroke(newc);
        line(0, y, width, y);
    }
}

function colorAverage(array) {
    //Determine the resultant color of an array (of many colors)
    //ARRAY = [[R1,G1,B1],[R2,G2,B2],...,[RN,GN,BN]]
    let avgColor;
    if (array.length > 0) {
        let sumR = 0;
        let sumG = 0;
        let sumB = 0;
        for (let i = 0; i < array.length; i++) {
            sumR += array[i][0];
            sumG += array[i][1];
            sumB += array[i][2];
        }
        avgColor = [sumR / array.length, sumG / array.length, sumB / array.length]
    } else {
        avgColor = [20, 20, 20];
    }
    return avgColor;
}

function checkKeywords(arrayOfArrays, targetArray, targetDict) {
    for (let x = 0; x < arrayOfArrays.length; x++) {
        for (let y = 0; y < arrayOfArrays[x].length; y++) {
            let keyword = arrayOfArrays[x][y];
            //mentioned & NOT stored:
            if (wordsStr.includes(keyword) && !targetArray.includes(keyword)) {
                targetArray.push(keyword);
                targetDict[keyword] = 1;
            }
            //mentioned & stored -> increase count
            if (wordsStr.includes(keyword) && targetArray.includes(keyword)) {
                var counter = wordsStr.split(keyword);
                counter = counter.length - 1;
                targetDict[keyword] = counter;
            }
        }
    }
}

function analyzeKeywords(arrayofKeywordsDetected, originalList, targetArray, existingDict) {

    //for each keyword in the array
    for (i = 0; i < arrayofKeywordsDetected.length; i++) {

        let keyword = arrayofKeywordsDetected[i];
        //Check emotions (or other keywords)
        for (x = 0; x < originalList.length; x++) {
            if (originalList[x].includes(keyword)) {
                for (a = 0; a < existingDict[keyword]; a++) { //how many times
                    targetArray.push(originalList[x][0])
                }
            }
        }
    }

}

function displayEmotions(arrayOfColors) {
    for (let i = 0; i < arrayOfColors.length; i++) {
        let icolor = arrayOfColors[i];
        stroke(icolor[0], icolor[1], icolor[2], 100);
        strokeWeight(8);
        noFill();
        ellipse(0, 0, 100 + 16 * i, 100 + 16 * i);
    }
}

function createSelf() {
    //Boundary
    noFill();
    stroke(230, 100);
    strokeWeight(2);
    ellipse(width / 2, height / 2, selfSize, selfSize)
}

function drawInSelf(codesSelf) {
    
    translate(width / 2, height / 2);
    noFill();
    stroke(255, 255, 255, 200);
    strokeWeight(5);


    if (codesSelf) {
        for (let i = 0; i < 3; i++) { //just to replicate 3 times the 120º

            for (let j = 0; j < codesSelf.length; j++) {
                if (codesSelf[j] == 0) {
                    //self actions +
                    //irradiate
                    line(0, 0, 0, 10);

                }
                if (codesSelf[j] == 1) {
                    //self actions -
                    //harm
                    line(0, 30, 0, 50);
                }
                if (codesSelf[j] == 2) {
                    //self characteristics
                    //neutral
                    ellipse(0, 25, 9, 9);
                }

                rotate(radians(120 / codesSelf.length));
            }
        }

    }

}

function drawOutSelf(codesEnv) {

    noFill();
    strokeWeight(5);
    stroke(255, 255, 255, 100);

    if (codesEnv) {
        for (let i = 0; i < 5; i++) { //just to replicate 5 times the 72º

            for (let j = 0; j < codesEnv.length; j++) {
                if (codesEnv[j] == 3) {
                    //characteristics
                    //neutral 3 dots

                    ellipse(0, 100, 9, 9);
                    ellipse(0, 110, 9, 9);
                    ellipse(0, 90, 9, 9);
                }
                if (codesEnv[j] == 4) {
                    //actions+
                    //expand

                    line(0, 50, 0, 91);
                    ellipse(0, 100, 9, 9);
                }
                if (codesEnv[j] == 5) {
                    //actions-
                    //reduce

                    line(0, 109, 0, 200);
                    ellipse(0, 100, 9, 9);
                }
                if (codesEnv[j] == 6) {
                    //entities
                    //neutral line

                    strokeWeight(8);
                    line(0, 90, 0, 110);
                    strokeWeight(5);

                }

                rotate(radians(72 / codesEnv.length));
            }
        }


    }

}