export class Weather{

    constructor(city, countryCode){
        this.city= city;
        this.countryCode = countryCode;
        this.apikey = 'a9a22b01d9a95cac7531df5ecc3ae4a8';
    }

    async getWeather(){
        const uri = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`
        const response = await fetch(uri)
        const data = await response.json();
        
        return data;
    }

    ChangeLocation(city, countryCode){
        this.city = city
        this.countryCode = countryCode
    }
}