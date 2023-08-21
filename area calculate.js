// 1.Rectangle

function calculateRectangleArea(){
    // 1.width
    // amra ekhon width value k store korbo
    const widthField = document.getElementById('rectangle-width')
    
    // ebar amra input field theke value collect korbo jate widht input e kisu likhlei oi lekha ta console.log(widthValueText) likhlei terminal er console e show kore
    const widthValueText = widthField.value;
    // jehetu amra math korbo eijonno amra ei intiger man k parsefloat korbo jate amra math korte pari
    const width = parseFloat(widthValueText);
    // 2.length
    // ebar amra same niyom e length er kaj korbo . ekdom same shob

    const lengthField = document.getElementById('rectangle-length')
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // hm done, amra same way te length er kaj o kore felsi
    //3. final ans calculation 
    // ebar area calculate korbo
    const area = width * length
 
    // ebar amra backend er calculation ta frontend e show korabo asnwer input field e.
    const areapre = document.getElementById('rectangle-area')
    areapre.value = area;
    
}


// 2.triange
function calculateTriangeArea(){
const basepre = document.getElementById('idOfBase')
const baseText = basepre.value;
const base = parseFloat(baseText);

const heightpre = document.getElementById('idOfHeight')
const heightText = heightpre.value;
const height = parseFloat(heightText);

const triareafinal = 0.5 * base * height

trimarbo = document.getElementById('triangle-area')

trimarbo.value = triareafinal;
    
}


// 