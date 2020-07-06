function GreetRadio(){
    const personAppend = 1;

    let hi="";
    let person="";
    let count=1;
    let names=[];
    let limit=20;

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
        if(names.length<limit){
        person=y;
        names.push(person)}
    }
    function getName(){
        return person;
    }

    function greetName(){
         return getLanguage() + getName();
    }

    function add(){
        if(names.length<limit){
        count += personAppend;}
    }
    function append(){
        return count
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
        add,
        append,
        list

    }
}