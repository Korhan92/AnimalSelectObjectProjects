let animal =  {
    species: "dog" ,
    name: "karabaş",
    legs: 4 ,
    color: "white" ,  
    age: 4,
    bark: function () {
        return "woof woof"
    } ,

    getAnimalInfo : function () {
        return `Bu hayvanın türü ${this.breed} ismi ${this.name} yaşı ${this.age} bu hayvanın insan yaşı ${this.calcAge()}`
        
    } ,

    calcAge : function () {
    if (this.age < 2) {
        return 10.5
    }else {
     return (2 * 10.5) + (this.age-2)*4;
    }
        
    }

}

animal.breed = "kangal"

console.log(animal.getAnimalInfo())
console.log(animal.calcAge())




