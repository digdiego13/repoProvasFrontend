describe("Login", () => {
	it("should login successfully", () => {
		cy.visit("http://localhost:3000/sign-in");

		cy.get("input[placeholder=e-mail]").type("diegomamede@gmail.com");
		cy.get("input[type=password").type("gostogosto");
		cy.get("button").click();
		cy.url().should("equal", "http://localhost:3000/subscription");
	});
});
