 fetch("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true")
.then((data) =>{
  return data.json();
 })
.then((coviddata) =>{
  const data=coviddata;
    let total=data.totalCases;
    let death=data.deaths;
    // let recover=total-death;
    // const recovered=data.TotalConfirmed-data.TotalDeaths;
  document.getElementById("total").innerHTML=total.toLocaleString('en-IN');
    document.getElementById("death").innerHTML=death.toLocaleString('en-IN');
    document.getElementById("new").innerHTML=data.activeCases.toLocaleString('en-IN');
    document.getElementById("recovered").innerHTML=data.recovered.toLocaleString('en-IN');
  // const data=coviddata;
  console.log(coviddata);
 })
.catch((error) =>{
  console.log("failed to fetch data");
 })