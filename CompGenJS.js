const introText = ['You are', 'You look', 'I think you are', 'Wow! You are', 'Can I say you look', 'You are always so']
const intensifier = ['mighty', 'so', 'very', 'really', 'extremely', 'truly', 'really very', 'absolutely']
const adjective = ['beautiful', 'glamourous', 'attractive', 'intelligent', 'amazing', 'fabulous',
'out of this world', 'glorious', 'awesome', 'delightful', 'pleasing']

const randomiser = (arrayParam) => {
    index = Math.random(arrayParam)*arrayParam.length;
    index = Math.floor(index);
    let compPart = arrayParam[index]
    return compPart;
}

const complimentGenerator = (introText, intensifier, adjective) => {
let intro = randomiser(introText)
let intense = randomiser(intensifier)
let descriptor = randomiser(adjective)
let compliment = `${intro} ${intense} ${descriptor}!`
writeCompliment(compliment)
}

const writeCompliment = (compliment) => {
document.getElementById('compliment').innerHTML = compliment;
document.getElementById('compliment').style.display = "block";
}

