const introText = ['You are', 'You look', 'I think you are', 'Wow! You are', "It's true. You are", 'Can I say you look', 'You are always so']
const intensifier = ['mighty', 'so', 'very', 'really', 'extremely', 'most', 'truly', 'really very', 'absolutely']
const adjective = ['beautiful', 'glamourous', 'attractive', 'intelligent', 'amazing', 'fabulous',
'out of this world', 'glorious', 'awesome', 'delightful', 'pleasing', 'impressive']

const randomiser = (arrayParam) => {
    let index = Math.floor(Math.random(arrayParam)*arrayParam.length);
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
document.getElementById('compliment').textContent = compliment;
document.getElementById('compliment').style.display = "block";
}

