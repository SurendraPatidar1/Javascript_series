const form = document.querySelector('form');
// this case will give you empty value after reload 
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `PLease give valid height${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid weight , ${weight}`;
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`;
    }
});
