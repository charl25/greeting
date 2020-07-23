function GreetRadio(){
    let nameList=[];

    let hi="";
    let person="";

    function setGreeting(x,y){
        if(x=== "isixhosa"){
            hi="Molo, "
        }
        if(x=== "english"){
            hi = "Hello, "
        }
        if(x === "afrikaans"){
            hi = "More, "
        }

        person=y;
    }

    function getLanguage(){
        return hi;
    }

    function getName(){
        return person;
    }

    function greetName(){
        if(nameList[person]===undefined){
            return hi + person;
        }
    }

    function list(z){
        nameList = z
        if(!nameList.includes(person)){
        nameList.push(person)
        return nameList}
        return nameList
    }

    return{
        setGreeting,
        greetName,
        getLanguage,
        getName,
        list
    }
}