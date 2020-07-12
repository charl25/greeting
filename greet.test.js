describe("Greet Exercise Function", function(){
    it("should display person name", function(){
        var greetRadio = GreetRadio()
        greetRadio.setName("Charl")
        assert.equal("Charl", greetRadio.getName())
    })

    it("should display greeting in Xhosa", function(){
        var greetRadio = GreetRadio()
        greetRadio.setLanguage("isixhosa")
        assert.equal("Molo, ", greetRadio.getLanguage())
    })

    it("should display greeting in English plus person name", function(){
        var greetRadio = GreetRadio()
        greetRadio.setName("Charl")
        greetRadio.setLanguage("english")
        greetRadio.greet()
        assert.equal("Hello, Charl", greetRadio.greetName())
    })

    it("should display count as 2", function(){
        var greetRadio = GreetRadio()
        greetRadio.setName("Charl")
        greetRadio.greet()
        greetRadio.setName("Charl")
        greetRadio.greet()
        greetRadio.setName("Clark")
        greetRadio.greet()
        greetRadio.setLanguage("english")
        assert.equal(2, greetRadio.counter())
    })
})