 fetch("https://api.covid19api.com/summary")
.then((data) =>{
 	return data.json();
 })
.then((coviddata) =>{
 	const data=coviddata.Countries[76];
    let total=data.TotalConfirmed;
    let death=data.TotalDeaths;
    let recover=total-death;
    // const recovered=data.TotalConfirmed-data.TotalDeaths;
 	document.getElementById("total").innerHTML=total;
    document.getElementById("death").innerHTML=death;
    document.getElementById("new").innerHTML=data.NewConfirmed;
    document.getElementById("recovered").innerHTML=recover;
 	// const data=coviddata;
 	console.log(coviddata);
 })
.catch((error) =>{
 	console.log("failed to fetch data");
 })