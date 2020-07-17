describe("Greet Exercise Function", function(){
    it("should display person name", function(){
        var greetRadio = GreetRadio()
        greetRadio.setGreeting("isixhosa","Charl")
        assert.equal("Charl", greetRadio.getName())
    })

    it("should display greeting in Xhosa", function(){
        var greetRadio = GreetRadio()
        greetRadio.setGreeting("isixhosa","Charl")
        assert.equal("Molo, ", greetRadio.getLanguage())
    })

    it("should display greeting in English plus person name", function(){
        var greetRadio = GreetRadio()
        //greetRadio.setName("Charl")
        greetRadio.setGreeting("english","Charl")
        //greetRadio.greet()
        assert.equal("Hello, Charl", greetRadio.greetName())
    })

    // it("should display count as 2", function(){
    //     var greetRadio = GreetRadio()
    //     greetRadio.setGreeting("isixhosa","Charl")
    //     greetRadio.greet()
    //     greetRadio.setGreeting("isixhosa","Charl")
    //     greetRadio.greet()
    //     greetRadio.setGreeting("isixhosa","Charl")
    //     greetRadio.greet()
    //     //greetRadio.setLanguage("english")
    //     assert.equal(2, greetRadio.counter())
    // })
})