const greetButton = document.querySelector(".greetBtn");
const greetTxt = document.querySelector(".greetText");
const name = document.querySelector(".greetArea");
const counter = document.querySelector(".counter")

const namesLocalStorage = localStorage['namesGreeted'];
  let currentFruitMap = null;
  if (namesLocalStorage) {
	currentFruitMap = JSON.parse(namesLocalStorage);
  }

const greetRadio = GreetRadio();

greetButton.addEventListener('click', function(e){

    var langChecked = document.querySelector("input[name='language']:checked");
    if(langChecked){
        var checkedLang = langChecked.value;
        }
        greetRadio.setLanguage(checkedLang);
        var person = name.value.trim();
        greetRadio.setName(person);
        greetRadio.add()

    
    greetTxt.innerHTML = greetRadio.greetName();
    counter.innerHTML = greetRadio.append();

    localStorage['namesGreeted'] = JSON.stringify(greetRadio.list());
})