function checkElectric() {
    const carType = document.getElementById('carTypeInput').value.toLowerCase();
    const electricCars = ["tesla", "nissan leaf", "chevrolet bolt"];
    const result = electricCars.includes(carType) ? 
        `${carType.charAt(0).toUpperCase() + carType.slice(1)} is electric.` : 
        `${carType.charAt(0).toUpperCase() + carType.slice(1)} is not electric.`;
    document.getElementById('electricResult').innerText = result;
}

function countCars() {
    const carList = document.getElementById('carListInput').value.split(',');
    const count = carList.length;
    document.getElementById('carCountResult').innerText = `Total cars: ${count}`;
}

function storeCarDetails() {
    const carModel = document.getElementById('carModelInput').value;
    const carYear = document.getElementById('carYearInput').value;
    const result = `Car Model: ${carModel}, Year: ${carYear}`;
    document.getElementById('carDetailsResult').innerText = result;
}
