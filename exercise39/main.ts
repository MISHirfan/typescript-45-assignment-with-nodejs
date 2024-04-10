//describe a function with perameters which return a values in string
function city_country(city: string, country: string) : string {
   return `${city}, ${country}`;
}

// calling \a function and print the returned values
console.log(city_country("karachi", "pakistan"));

console.log(city_country("tokyo", "japan"));