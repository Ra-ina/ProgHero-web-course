function calculateRhombusArea(){
    // get diagonal1 value
    const diagonal1Input = document.getElementById('diagonal-1');
    const diagonal1Text = diagonal1Input.value;
    const D1 = parseFloat(diagonal1Text);
    console.log(D1);

    // get diagonal-2 value
    const diagonal2Input = document.getElementById('diagonal-2');
    const diagonal2Text = diagonal2Input.value;
    const D2 = parseFloat(diagonal2Text);
    console.log(D2);

    // calculate rhombus area
    const area = 0.5 * D1 * D2;
    console.log('area of the rhombus is:', area);

    // display rhombus area
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}