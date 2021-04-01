let number;

const generate_number = () => {

    //Generate 0 to 0.94783564389 and multiply by 10
    let n1 = Math.random() * 10;

    //Remove digits after decimal
    let n2 = Math.trunc(n1);

    n2 = (n2 % 6) + 1;
    number = n2;
    console.log(`From Durgesh : ${number}`);

}

//generate_number();

const gameStart = () => {
    globalThis.console.log("Game starting...");
    document.querySelector('#section1').style.display = 'none';
    document.querySelector('#section2').style.display = 'block';
    document.querySelector('#section3').style.display = 'none';

    setTimeout(() => {
        generate_number();
        document.querySelector('#user_num').value = '';
        document.querySelector('#section1').style.display = 'none';
        document.querySelector('#section2').style.display = 'none';
        document.querySelector('#section3').style.display = 'block';
    }, 3000);
}

//check number
const checkNumber = () => {
    let user_num = document.getElementById('user_num').value;
    if (user_num != '') {

        let temp = parseInt(user_num);
        if (temp <= 6 && temp >= 0) {
            console.log(user_num);
            if (user_num == number) {
                swal("Congrats 👍", "You Won 🥇", 'success');
            }
            else {
                swal("Sorry, Incorrect ❎", "Try Again", 'info');
            }
            document.querySelector('#gen_num').innerHTML = `(Last time, it was : ${number})`;
            gameStart();
        }
        else {
            swal("Oops", "Number must be in between 1 to 6", "error");
        }
    }
    else {
        swal(" 😠", "Please enter any number !", 'warning');
    }

}

//------------------------------------------------
function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

//console.log(`From Other : ${getRandomInt(6)}`);