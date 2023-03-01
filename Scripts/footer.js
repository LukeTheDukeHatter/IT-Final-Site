const FootnoteText = document.getElementById('CompanyNameTextThing');

// FootnoteText.innerText = `Festival Information Specialist™ (${new Date().getFullYear()}) [${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}]`
FootnoteText.innerText = `Festival Information Specialist™ (${new Date().getFullYear()})`

let interval = setInterval(function() {

    let Hours = new Date().getUTCHours().toString();
    let Minutes = new Date().getUTCMinutes().toString();
    let Seconds = new Date().getUTCSeconds().toString();

    Hours = Hours.length === 1 ? "0" + Hours : Hours;
    Minutes = Minutes.length === 1 ? "0" + Minutes : Minutes;
    Seconds = Seconds.length === 1 ? "0" + Seconds : Seconds;

    // FootnoteText.innerHTML = `Festival Information Specialist™ (${new Date().getFullYear()}) <a href='https://time.is'>[${Hours}:${Minutes}:${Seconds}]</a>`;
    FootnoteText.innerHTML = `Festival Information Specialist™ (${new Date().getFullYear()})`;
}, 1000);