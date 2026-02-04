class WeatherStation {
    constructor(){
        this.observers = [];
        this.temperature = 0;
    }
     subscribe(observer)
     {
        this.observers.push(observer);
     }
     setTemperature(temp)
     {
        this.temperature = temp;
        this.notify();
     }
     notify()
     {
        this.observers.forEach(obs => 
            obs.update(this.temperature)
        );
     }
}
class Display {
    constructor(name)
    {
        this.name=name;
    }
    update(temp)
    {
        console.log(`${this.name} display: ${temp}°C`);
        
    }
}
// Create objects
let station = new WeatherStation();

let mobile = new Display("Mobile");
let tv = new Display("Tv");
let website = new Display("Website");
// Subscribe observers
station.subscribe(mobile);
station.subscribe(tv);
station.subscribe(website);
// Trigger updates (state change)
station.setTemperature(28);
// station.setTemperature(32);
// station.setTemperature(25);

