function GreetRadio(){
    let count = 0;
    let names=[];

    let salute="";
    let hi="";
    let person="";

    function setLanguage(x){
        if(x=== "isixhosa"){
            hi="Molo, "
        }
        if(x=== "english"){
            hi = "Hello, "
        }
        if(x === "afrikaans"){
            hi = "More, "
        }
    }

    function getLanguage(){
        return hi;
    }

    function setName(y){
        if(names[y]=== undefined){

        person=y;
        names.push(person)}
    }
    function getName(){
        return person;
    }

    
    function greet(){
        if(names[person] === undefined){
            count++;
            names[person]=0
            salute = hi + person;
        }
    }
    function counter(){
        return count
    }
    function greetName(){
        return salute;
    }

    function list(){
        return names;
    }

    

    return{
        setLanguage,
        setName,
        greetName,
        getLanguage,
        getName,
        counter,
        list,
        greet

    }
}