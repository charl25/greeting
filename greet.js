const greetButton = document.querySelector(".greetBtn");
const greetTxt = document.querySelector(".greetText");
const name = document.querySelector(".greetArea");
const counter = document.querySelector(".counter");
const clearBtn = document.querySelector(".clearBtn")

 var names=[]
if(typeof localStorage["namesGreeted"] !== "undefined"&& localStorage["namesGreeted"] !== "undefined"){
 names = JSON.parse(localStorage.getItem('namesGreeted'));
}

const greetRadio = GreetRadio();

greetTxt.innerHTML = greetRadio.greetName();
counter.innerHTML = names.length;   

greetButton.addEventListener('click', function(e){
  
  var langChecked = document.querySelector("input[name='language']:checked");
  var person = name.value.trim();
  if(langChecked){
    var checkedLang = langChecked.value;
  }
  if(!langChecked && person==""){
    greetTxt.innerHTML="enter a name and select a language"
  }
  if(!langChecked){
    greetTxt.innerHTML="select a language"
  }
  if(person==""){
    greetTxt.innerHTML="enter a name"
  }
if(/[a-zA-z]$/.test(person) && !(checkedLang === undefined) && !(names.includes(person))){
  
  greetRadio.setGreeting(checkedLang,person);
  names = greetRadio.list(names)

  localStorage.setItem('namesGreeted', JSON.stringify(names));
  
  greetTxt.innerHTML = greetRadio.greetName();
  counter.innerHTML = names.length    
}
})

clearBtn.addEventListener('click', function(e){
  localStorage.clear() 
  location.reload ();
})