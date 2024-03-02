
describe("Lesson 1",()=>{

   
//1-Go to website 
//2-Enter valid email 
//3- Enter valid pass 
//4- click on login button 
//5- The user will be redirected to my account page 
    it.only("Validate that the user can login to magento site",()=>{
    cy.visit("/customer/account/login/")
    cy.get("#email").type("CypressUser@gmail.com")
    cy.get("#pass").type("test@123")
    cy.get("#send2").click()
    //id=> #id
    //class => .class name 
    //any athor attr put it between []

    cy.get(".page-title").should("contain","My Account")
    })
})