// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('createTask', (label) => {
//     cy.get('a').contains(label).click()
//   })
Cypress.Commands.add("createTask", (task) => {
  cy.get('input[data-testid="todo-textfield"]').type(task).realPress("Enter");
});

Cypress.Commands.add("checkLength", (el, length) => {
  cy.get(el).children().should("have.length", length);
});

Cypress.Commands.add("checksLastText", (el, text) => {
  cy.get(el).last().should("have.text", text);
});

Cypress.Commands.add("clicksFirst", (el) => {
  cy.get(el).first().click();
});

Cypress.Commands.add("checksFirstChecked", (el) => {
  cy.get(el).first().should("be.checked");
});

Cypress.Commands.add("checksFocusedAttr", (val) => {
  cy.focused().should("have.attr", "data-testid", val);
});

Cypress.Commands.add("Tab", (el, key) => {
  cy.get(el).realPress(key ? key : "Tab");
});

Cypress.Commands.add("pressFocused", (el, key) => {
  cy.get(el).first().focus().realPress(key);
});
