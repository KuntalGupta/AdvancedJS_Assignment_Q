function getAPIdata(){
    fetch("http://api.nobelprize.org/v1/prize.json")
    .then(res => res.json())
    .then(output => {
        const data = output;
        result = [];
        data.prizes.forEach((prize) => {
            if (prize.category === "chemistry" && parseInt(prize.year) >= 2000 && parseInt(prize.year) < 2020) {
                prize.laureates.forEach((person) => {
                    result.push(person.firstname + " " + person.surname);
                });
            }
        });
        console.clear();
        alert("Please Check Console");
        console.log(result);

    });
}