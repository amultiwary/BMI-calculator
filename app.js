const form = document.querySelector("form");
const results = document.querySelector("#results");

//form ya to post type se submit hota h ya get type se. but jb bhi submit hoti h uski value url ya server me chali jati h ..uske default behaviour ko rokna pdega..
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  console.log(height, weight);
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `<br><br>Please input a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `<br><br>Please input a valid weight ${weight}`;
  } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      results.innerHTML = `<span> <br><br>Your BMI is: <strong> ${bmi}</span> </strong>`;
      
     if(bmi<18.6){
         results.innerHTML+="<br> <br>You are <strong> under weight</strong>";
     }
     else if(bmi>18.6 && bmi<24.9){
        results.innerHTML+="<br> <br>Your BMI is <strong> Normal</strong>";
    }else if(bmi>24.9){
            results.innerHTML+="<br> <br>You are <strong> Over weight</strong>";
    }
    
     

    

  }
});
