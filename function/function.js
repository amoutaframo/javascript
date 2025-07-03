// function girls(){
// console.log("Many girls like fashion.");
// console.log("Many girls enjoy chocolate.");
// console.log("Many girls love traveling.");
// console.log("Many girls appreciate music.");
// console.log("Many girls like flowers.");
// console.log("Many girls enjoy reading books.");
// console.log("Many girls value honesty.");
// console.log("Many girls seek respect.");
// console.log("Many girls like skincare routines.");
// console.log("Many girls enjoy deep conversations.");
// console.log("Many girls love spending time with friends.");
// console.log("Many girls like cute animals.");
// console.log("Many girls enjoy art and creativity.");
// console.log("Many girls like cozy nights in.");
// console.log("Many girls love surprises.");
// console.log("Many girls enjoy good food.");
// console.log("Many girls like learning new things.");
// console.log("Many girls love feeling confident.");
// console.log("Many girls enjoy taking pictures.");
// console.log("Many girls like being listened to.");}
// girls() 

// function boys(){
// console.log("🏀 Many men like sports.");
// console.log("💻 Many men enjoy technology.");
// console.log("🎮 Many men love video games.");
// console.log("🍔 Many men appreciate good food.");
// console.log("🎵 Many men enjoy music.");
// console.log("🚗 Many men like cars and motorcycles.");
// console.log("🤝 Many men value loyalty.");
// console.log("🏕️ Many men enjoy outdoor adventures.");
// console.log("🛠️ Many men like building or fixing things.");
// console.log("🏆 Many men love a good challenge.");
// console.log("📚 Many men enjoy learning new skills.");
// console.log(" Many men like spending time with friends.🍻");
// console.log("🎬 Many men enjoy movies and series.");
// console.log(" Many men like working out or staying active.💪");
// console.log("🧑‍⚖️ Many men value respect.");
// console.log("🗣️ Many men enjoy deep conversations.");
// console.log(" Many men love achieving goals.");
// console.log(" Many men appreciate supportive relationships.❤️");
// console.log("👔 Many men like fashion and grooming.");
// console.log(" Many men enjoy peace and quiet sometimes. 🌌");}
// boys()

//function multiply (num1,num2){
//return(num1*num2)}

//console.log("the result is =");console.log( multiply(2,4));

// function information(nam1,nam2,age,country,gender){
//     var toutinfo
    
//     if(gender== "male"){
//         toutinfo= nam1+""+nam2;
//         toutinfo+= "sont age est  "+age;
//         toutinfo+= "  il habite a "+country;

//     }
//     else{
//         toutinfo=nam1+""+nam2;
//  toutinfo+= " sont age est  "+age;
//    toutinfo+= "  elle habite a "+country;
//     }   
// return toutinfo;
// }

// console.log("les information sont ",information("fatouma ","omar",22,"Djibouti","female"));


function information(nam1, nam2, age, country, gender) {
    let toutinfo;

    if (gender === "male") {
        toutinfo = `${nam1} ${nam2}, son âge est ${age} ans. Il habite à ${country}.`;
    } else {
        toutinfo = `${nam1} ${nam2}, son âge est ${age} ans. Elle habite à ${country}.`;
    }

    return toutinfo;
}

console.log("Les informations sont :", information("Fatouma", "Said", 22, "Djibouti", "female"));
