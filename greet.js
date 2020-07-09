const greetButton = document.querySelector(".greetBtn");
const greetTxt = document.querySelector(".greetText");
const name = document.querySelector(".greetArea");
const counter = document.querySelector(".counter");
const clearBtn = document.querySelector(".clearBtn")

var names=[];

var namesLS = localStorage['namesGreeted'];

const greetRadio = GreetRadio();

greetButton.addEventListener('click', function(e){

  var langChecked = document.querySelector("input[name='language']:checked");
  if(langChecked){
    var checkedLang = langChecked.value;
    }
  var person = name.value.trim();

  greetRadio.setLanguage(checkedLang);
  greetRadio.setName(person);
  greetRadio.greet();

  greetTxt.innerHTML = greetRadio.greetName();
  counter.innerHTML = greetRadio.counter();

  localStorage['count']= greetRadio.counter();
    
  localStorage['namesGreeted'] = JSON.stringify(greetRadio.list());
    
})

clearBtn.addEventListener('click', function(e){
  greetRadio.clear();
  localStorage['namesGreeted'] = JSON.stringify(greetRadio.list());
  localStorage['count']= greetRadio.counter();

  location.reload ();
})