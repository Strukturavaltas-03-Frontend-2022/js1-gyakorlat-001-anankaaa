const personDataLog = ({firstname='John', lastname='Doe', age=33}) => 'My name is '+ firstname + ' ' + lastname + '. I am '+ age + ' years old.'


const user = {
    firstname: 'Andras',
    age: 38,

}
console.log(personDataLog(user));
