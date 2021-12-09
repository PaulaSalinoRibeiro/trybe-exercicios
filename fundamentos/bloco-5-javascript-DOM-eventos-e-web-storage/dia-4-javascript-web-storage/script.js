window.onload = function(){

    let paragraph = document.querySelector('p');
    
     // Change background color 
     let bgColor = document.getElementById('bg-color');
     let body = document.querySelector('body');
     body.addEventListener('change', changeBgColor);

    function changeBgColor(){
        body.style.backgroundColor = bgColor.value;
        localStorage.setItem('background', bgColor.value);
    }

    // Change text color
    let txtColor = document.getElementById('txt-color');
    txtColor.addEventListener('change', changeTxtColor);

    function changeTxtColor(){
        paragraph.style.color = txtColor.value;
        localStorage.setItem('color', txtColor.value)
    }

    // Change font size
    let fontSize = document.getElementById('font-size');
    fontSize.addEventListener('change', changeFontSize);
    
    function changeFontSize(){
        paragraph.style.fontSize = fontSize.value;
        localStorage.setItem('font', fontSize.value)
    }

    // Change space between text lines
    let spaceLines = document.getElementById('text-lines');
    spaceLines.addEventListener('change', changeSpaceLine);

    function changeSpaceLine(){
        paragraph.style.lineHeight = spaceLines.value;
        localStorage.setItem('spaceLine', spaceLines.value);
    }

    // Change font family
    let fontFamily = document.getElementById('font-family');
    fontFamily.addEventListener('change', changeFontFamily);

    function changeFontFamily(){
        paragraph.style.fontFamily = fontFamily.value;
        localStorage.setItem('fontFamily', fontFamily.value)
    }

    // Get and aplied preference 

    let savedBg = localStorage.getItem('background');
    let savedColor = localStorage.getItem('color');
    let savedFont = localStorage.getItem('font');
    let savedSpaceLine = localStorage.getItem('spaceLine');
    let savedFontFamily = localStorage.getItem('fontFamily');

    body.style.backgroundColor = savedBg;
    paragraph.style.color = savedColor;
    paragraph.style.fontFamily = savedFont;
    paragraph.style.lineHeight = savedSpaceLine;
    paragraph.style.fontFamily = savedFontFamily;

}

    





    



