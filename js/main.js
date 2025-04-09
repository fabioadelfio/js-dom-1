const lightButton = document.querySelector(`.light-btn`);
const light = document.querySelector(`.light-off`);

console.log(light);
console.log(lightButton);

lightButton.addEventListener(`click`, function(){
    if(lightButton.innerHTML === `Accendi`) {
        light.className = `light-on col-4`;
        light.src = "./img/yellow_lamp.png";

        lightButton.className = `light-btn btn btn-danger col-4`
        lightButton.innerHTML = `Spegni`;
    }
    else if (lightButton.innerHTML === `Spegni`) {
        light.className = `light-off col-4`;
        light.src = "./img/white_lamp.png";

        lightButton.className = `light-btn btn btn-success col-4`
        lightButton.innerHTML = `Accendi`;
    }
})