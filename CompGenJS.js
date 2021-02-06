const introText = ['You are', 'You look', 'I think you are', 'Wow! You are', 'Can I say you look']
const intensifier = ['mighty', 'so', 'very', 'really', 'extremely', 'truly', 'really very', 'absolutely']
const adjective = ['beautiful', 'glamourous', 'attractive', 'intelligent', 'amazing', 'fabulous',
'out of this word', 'glorious', 'awesome', 'delightful', 'pleasing']

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
return compliment
}

onsubmit: complimentGenerator(introText, intensifier, adjective))

document.getElementById('compliment').innerHTML = compliment;
document.getElementById('compliment').style.display = "block";
