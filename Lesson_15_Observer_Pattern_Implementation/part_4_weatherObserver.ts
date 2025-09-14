const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay();
const statisticsDisplay = new StatisticsDisplay();

weatherData.registerObserver(currentDisplay);
weatherData.registerObserver(statisticsDisplay);

weatherData.setMeasurements(25, 65, 1013); // Weather update
weatherData.setMeasurements(27, 70, 1012); // Another update
weatherData.setMeasurements(22, 80, 1010); // Another update
