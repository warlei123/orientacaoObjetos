function Person(first, last, age, gender, interests, animal) {
    this.name = {
        'first': first,
        'last': last
    }
    this.age = age
    this.gender = gender
    this.favoriteAnimal = animal
    this.interests = interests

    this.bio = function () {
        var interestsDisplay = `${this.name.first} ${this.name.last} is ${this.age} years old . `
        var prefix

        if (this.gender == 'male') {
            prefix = 'he likes '
        } else if (this.gender == 'female') {
            prefix = 'she likes '
        } else {
            prefix = 's/he likes '
        }

        interestsDisplay += prefix

        if (this.interests.length === 1) {
            interestsDisplay += `${interests[0]}`
        } else if (this.interests.length === 2) {
            interestsDisplay += `${interests[0]} and ${interests[1]}`
        } else {
            for (let i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    interestsDisplay += ` and ${interests[i]}.`
                } else {
                    interestsDisplay += ` ${interests[i]}, `
                }
            }

        }

        alert(`${interestsDisplay} and got ${this.favoriteAnimal} as Pet`)
    }

    this.greeting = function () {
        alert(`Hi! I\`m ${this.name.first}.`)
    }
}

// var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing'], 'dog');
// var person2 = new Person('Sarah', 'J. Parker', 43, 'female', ['Acting', 'Singing', 'Cooking'], 'cat');
// var person3 = new Person('Anura', 'Ignis', 45000, 'genderless', ['terraforming'], 'Quetzoquatl');

function coletarDados(){var nome = prompt('Qual seu nome?')
    var sobreNome = prompt('Qual seu sobrenome?')
    var idade = prompt('Qual sua idade?')
    var sexo = prompt('Qual seu genero')
    var hobbies = []
    while (hobbies.length >= 0) {
    if (hobbies.length == 0) {
        let primeiroHobbie = prompt('Qual o seu Hobby?')
        hobbies.push(primeiroHobbie)
    }else if (hobbies.length > 0) {
        if(confirm('Tem mais algum')){ 
        let demaisHobbies = prompt('Qual o outro?')
        hobbies.push(demaisHobbies)}
        else{
            break
        }
    }else{
        break
        }
    }
    var animal = prompt('Qual seu animal favorito?')
    persona.push(new Person(nome, sobreNome, idade, sexo, hobbies, animal))
}



var persona = []

function pesquisa(){
    let x =prompt('digite o primeiro nome')
    for (let i = 0; i <= persona.length; i++) {
        if (persona[i].name.includes(x)){
            alert(persona[i].name) 
    }
    
    }
}