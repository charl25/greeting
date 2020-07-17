function GreetRadio(){
    //let count = 0;
    let nameList=[];

    //let salute="";
    let hi="";
    let person="";

    function setGreeting(x,y){
        //var list=[]
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
        // if(nameList[y] === undefined){
        //     //count++;
        //     //z.push(y);
        //     //list=z
        // }
        //return list
    }

    function getLanguage(){
        return hi;
    }

    // function setName(y){
    //     if(names[y]=== undefined){

    //     person=y;
    //     names.push(person)}
    // }
    function getName(){
        return person;
    }

    
    // function greet(){
        
    // }
    // function counter(){
    //     return count
    // }
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

    // function clear(){
    //     names=[]
    //     count=0
    // }

    return{
        setGreeting,
        //setName,
        greetName,
        getLanguage,
        getName,
        //counter,
        list
        //greet,
        //clear

    }
}