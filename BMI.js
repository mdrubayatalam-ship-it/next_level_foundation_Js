
function heightTometer(foot,inches){
    const footConv =  12 * foot;
    const total = (footConv + inches) * 0.0254;
    return total;
}

// console.log("Height:",heightTometer(5,8));

function bmi(weight, height){
     const calculateBmi =  weight/(height*height);
     return calculateBmi;
}

const myBmi = bmi(72,heightTometer(5,8));
console.log("Your Current BMI:",bmi(72,heightTometer(5,8)));
// now condition

if(myBmi >= 18.5 && myBmi <= 24.9){
     console.log("Status: Normal Weight");
}
else if(myBmi >= 25.0 && myBmi <= 29.9){
    console.log("Status: Overweight");
}
else if(myBmi >= 30.0){
    console.log("Status: Obese");
}

else
{
    console.log("Status: UnderWeight");
}
