const form =document.querySelector('form')

form.addEventListener('submit',function(e){
e.preventDefault();

const height= Number(document.querySelector('#height').value)
const weight = Number(document.querySelector('#weight').value)
const result=document.querySelector('#results');

if(weight==="" || weight<0 || isNaN(weight)){
  result.innerHTML=`please insert a Valid height ${weight}`;
}
else if(height==="" || height<0 || isNaN(height)){
  result.innerHTML=`please insert a Valid weight ${weight}`;
}

else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (bmi < 18.6) {
    result.innerHTML = `
    ${bmi} Underweight 
    <p> go eat some food you slum 🤧 </p>`;
  }
  else if (bmi > 18.6 && bmi < 24.9) {
    result.innerHTML = `
    ${bmi} Normal Weight
    <p>life is not for being Normal 🙂‍↔️  </p>`;

   }
  else {
    result.innerHTML = `
    ${bmi} Overweight
    <p>Go to Gym you feast of the earthearth 😤🤬 </p>`;

}
}

})
