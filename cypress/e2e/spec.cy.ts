const userName = "Asipita";

describe("Page verification", () => {
  it("visits home page", () => {
    cy.visit("/");
    //contains expected header
    cy.contains(/github profile finder/i);
  });
});

describe("Searching functionality", () => {
  it("allows typing into input field", () => {
    cy.visit("/");

    cy.get("input").type(userName);
    cy.get("input").should("include.value", userName);
    cy.contains(/Search/i).click();

    //username gets attached to url
    cy.url().should("include", userName);
  });

  it("appends search query to url", () => {
    cy.visit("/");
    cy.get("input").type(userName);
    cy.contains(/Search/i).click();

    //username gets attached to url
    cy.url().should("include", userName);
  });

  it("fetches data from api", () => {
    cy.visit("/");
    cy.get("input").type(userName);
    cy.contains(/Search/i).click();
    const profile = cy.get(`[data-cy="${userName}"]`);

    profile.should("be.visible");
    profile.get(`[data-cy="${userName}_details"]`).click();

    cy.url().should("include", userName);
  });

  it("visits user profile page", () => {
    cy.visit("/");
    cy.get("input").type(userName);
    cy.contains(/Search/i).click();
    cy.get(`[data-cy="${userName}"]`);
    cy.get(`[data-cy="${userName}_details"]`).click();

    cy.url().should("include", userName);
  });
});
