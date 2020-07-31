const msg = document.querySelector('.msg');
        const guess = document.querySelector('input');
        const btn = document.querySelector('.btn');

        let sWords = ['python', 'javascript', 'c++', 'php', 'java', 'c#', 'html', 'css', 'bootstrap', 'angular', 'swift', 'android', 'sql', 'reactjs', 'pandas', 'numpy', 'springboot', 'spring', 'springmvc'];

        const createNewWord = () => {

            let ranNum = Math.floor((Math.random() * sWords.length));
            //console.log(ranNum);

            let newTempSwords = sWords[ranNum];
            console.log(newTempSwords);

            return newTempSwords;
        }

        const srambleWords = (newWords) => {

            let arr = newWords.split("");
            console.log(arr);
            for (let i = arr.length - 1; i >= 0; i--) {
                let temp = arr[i];
                //console.log(temp);

                let j = Math.floor(Math.random() * (i + 1));

                arr[i] = arr[j];
                arr[j] = temp;
            }
            return arr;

        }

        let play = false;
        let newWord = "";
        let randWord = "";
        btn.addEventListener('click', function () {
            if (!play) {
                play = true;
                btn.innerHTML = "Guess";
                guess.classList.toggle('hidden');
                newWord = createNewWord();
                randWord = srambleWords(newWord);
                scrambledWord = randWord.join("");
                console.log(scrambledWord);

                msg.innerHTML = `Guess the word : ${scrambledWord}`;
            }
            else {

                let tempWord = guess.value;
                if (tempWord === newWord) {
                    console.log("correct");
                    play = false;
                    msg.innerHTML = `Awesome It's Correct. It is ${newWord}`;
                    btn.innerHTML = "Start Again";
                    guess.classList.toggle('hidden');
                    guess.value = "";
                }
                else {
                    console.log("incorrect");
                    msg.innerHTML = `Sorry Boss It's Incorrect. Plz try again ${scrambledWord}`;
                    btn.innerHTML = "Guess Again";
                }
            }
        })
