document.addEventListener('DOMContentLoaded', function() {
    const hoursElem = document.getElementById('hours');
    const minutesElem = document.getElementById('minutes');
    const secondsElem = document.getElementById('seconds');
    const ampmElem = document.getElementById('ampm');
    const greeting = document.getElementById('greeting');

    setInterval(displayTime, 1000);

    function displayTime() {
        let today = new Date();
        let Hours = today.getHours();
        let Mint = today.getMinutes();
        let Sec = today.getSeconds();

        if (Hours < 10) {
            Hours = '0' + Hours;
        }

        if (Mint < 10) {
            Mint = '0' + Mint;
        }

        if (Sec < 10) {
            Sec = '0' + Sec;
        }

        hoursElem.innerText = Hours;
        minutesElem.innerText = Mint;
        secondsElem.innerText = Sec;
        
        ampmElem.innerText = (Hours < 12) ? 'AM' : 'PM';

        if (Hours >= 5 && Hours < 12) {
            greeting.innerText = 'Good Morning!';
        } else if (Hours >= 12 && Hours < 18) {
            greeting.innerText = 'Good Afternoon!';
        } else if (Hours >= 18 && Hours < 22) {
            greeting.innerText = 'Good Evening!';
        } else {
            greeting.innerText = 'Good Night!';
        }
    }
});