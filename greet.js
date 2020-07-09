const greetButton = document.querySelector(".greetBtn");
const greetTxt = document.querySelector(".greetText");
const name = document.querySelector(".greetArea");
const counter = document.querySelector(".counter");
const clearBtn = document.querySelector(".clearBtn")

var names=[];

const greetRadio = GreetRadio();

greetTxt.innerHTML = greetRadio.greetName();
counter.innerHTML = JSON.parse(localStorage['count']);    

greetButton.addEventListener('click', function(e){
  
  var langChecked = document.querySelector("input[name='language']:checked");
  if(langChecked){
    var checkedLang = langChecked.value;
  }
  var person = name.value.trim();
if(/[a-zA-z]$/.test(person) && !(checkedLang === undefined)){
  
  greetRadio.setLanguage(checkedLang);
  greetRadio.setName(person);
  greetRadio.greet();
  
  localStorage['count']= greetRadio.counter();
  
  localStorage['namesGreeted'] = JSON.stringify(greetRadio.list());
  
  greetTxt.innerHTML = greetRadio.greetName();
  counter.innerHTML = JSON.parse(localStorage['count']);    
}
})

clearBtn.addEventListener('click', function(e){
  greetRadio.clear();
  localStorage['namesGreeted'] = JSON.stringify(greetRadio.list());
  localStorage['count']= greetRadio.counter();
  
  location.reload ();
})