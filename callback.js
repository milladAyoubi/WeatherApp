//Exploring the Concept Behind Node.js Concepts


setTimeout(() => {
    console.log('Two Seconds Are Up');

}, 2000) 

const names = ['Zuko', 'Azula', 'Appa'];
const shortNames = names.filter((name) => {
return name.length <= 4;
}
)


const geoCode = (address,callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }

    return data;
}
console.log(geoCode());