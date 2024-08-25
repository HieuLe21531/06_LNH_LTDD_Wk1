function printForecast(arr: number[]): void {
    let forecastStr = '... ';
    for (let i = 0; i < arr.length; i++) {
        forecastStr = forecastStr + `${arr[i]}°C in day ${i + 1}  ... `;
    }
    console.log(forecastStr);
}

const data = [17, 21, 23];

printForecast(data);

