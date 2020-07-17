const greetButton = document.querySelector(".greetBtn");
const greetTxt = document.querySelector(".greetText");
const name = document.querySelector(".greetArea");
const counter = document.querySelector(".counter");
const clearBtn = document.querySelector(".clearBtn")

// localStorage['namesGreeted']
 var names=[]
if(typeof localStorage["namesGreeted"] !== "undefined"
&& localStorage["namesGreeted"] !== "undefined"){
// names = JSON.parse(localStorage['namesGreeted'])
 names = JSON.parse(localStorage.getItem('namesGreeted'));
}


const greetRadio = GreetRadio();

greetTxt.innerHTML = greetRadio.greetName();
counter.innerHTML = names.length;   

greetButton.addEventListener('click', function(e){
  
  var langChecked = document.querySelector("input[name='language']:checked");
  if(langChecked){
    var checkedLang = langChecked.value;
  }
  var person = name.value.trim();
if(/[a-zA-z]$/.test(person) && !(checkedLang === undefined) && !(names.includes(person))){
  
  greetRadio.setGreeting(checkedLang,person);
  names = greetRadio.list(names)
  //greetRadio.setName(person, names);
  //greetRadio.greet();
  
  //localStorage['count']= greetRadio.counter();
  //names = greetRadio.getLS()
  
  localStorage.setItem('namesGreeted', JSON.stringify(names));
  
  greetTxt.innerHTML = greetRadio.greetName();
  counter.innerHTML = names.length    
}
})

clearBtn.addEventListener('click', function(e){
  //greetRadio.clear();
  localStorage.clear()
  //localStorage['namesGreeted'] = JSON.stringify(greetRadio.list());
  //localStorage['count']= greetRadio.counter();
  
  location.reload ();
})