Cypress.Commands.add("createTask", (task) => {
  cy.get('input[data-testid="todo-textfield"]').type(task).realPress("Enter");
});

Cypress.Commands.add("checkLength", (length) => {
  cy.get('ul[data-testid="todo-list-item-container"]')
    .children()
    .should("have.length", length);
});

Cypress.Commands.add("checksLastText", (text) => {
  cy.get('li[data-testid="todo-list-item"]').last().should("have.text", text);
});

Cypress.Commands.add("clicksFirst", (el) => {
  cy.get(el).first().click();
});

Cypress.Commands.add("checksFirstChecked", (el) => {
  cy.get('input[data-testid="todo-complete-task"]')
    .first()
    .should("be.checked");
});

Cypress.Commands.add("checksFocusedAttr", (val) => {
  cy.focused().should("have.attr", "data-testid", val);
});

Cypress.Commands.add("Press", (el, key) => {
  cy.get(el).realPress(key ? key : "Tab");
});

Cypress.Commands.add("pressFocused", (el, key) => {
  cy.get(el).first().focus().realPress(key);
});
