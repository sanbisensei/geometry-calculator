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


// 3.Parallelogram

function calculateParallelogram(){

    const parapre = document.getElementById('parab')
const paraText = parapre.value;
const baseing = parseFloat(paraText);

const gigipre = document.getElementById('parah')
const pheightText = gigipre.value;
const heighting = parseFloat(pheightText);

const paraareafinal = baseing * heighting

paramarbo = document.getElementById('finalpara')

paramarbo.value = paraareafinal;

}

// 4. rhombus

function calculateRhombus(){
    
        const rhopre = document.getElementById('idOfD')
        const rhoText = rhopre.value;
        const d = parseFloat(rhoText);
        
        const rhoheightpre = document.getElementById('idOfB')
        const rhoheightText = rhoheightpre.value;
        const b = parseFloat(rhoheightText);
        
        const rhoareafinal = 0.5 * d * b

        
        rhomarbo = document.getElementById('finalRho')
        
        rhomarbo.value = rhoareafinal;

}

// 5. pentagon

function calculatePentagon(){

    const basepre = document.getElementById('idOfPow')
const baseText = basepre.value;
const base = parseFloat(baseText);

const heightpre = document.getElementById('idOfBow')
const heightText = heightpre.value;
const height = parseFloat(heightText);

const triareafinal = 0.5 * base * height

trimarbo = document.getElementById('pentafinal')

trimarbo.value = triareafinal;
    
}

// 6. ellipse
function calculateEllipse(){
    const basepre = document.getElementById('alia')
const baseText = basepre.value;
const base = parseFloat(baseText);

const heightpre = document.getElementById('alib')
const heightText = heightpre.value;
const height = parseFloat(heightText);

const triareafinal = base * height

trimarbo = document.getElementById('finalalia')

trimarbo.value = triareafinal;
}