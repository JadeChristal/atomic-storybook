import "cypress-real-events/support";

describe("Storybook Todo", () => {
  before(() => {
    cy.visit("/iframe.html?id=components-todo--main");
  });
  it("Add task to Todo", () => {
    cy.createTask("My first task");
    cy.createTask("My second task");

    cy.checkLength(2);
    cy.checksLastText("My first task");
  });

  it("Should complete task in Todo", () => {
    cy.clicksFirstElement('input[data-testid="todo-complete-task"]');
    cy.checksIfFirstElChecked();
  });

  it("Should remove task in Todo", () => {
    cy.clicksFirstElement('button[data-testid="todo-remove-task"]');
    cy.checkLength(1);
  });

  it("Should navigate using tabs", () => {
    cy.Press('input[data-testid="todo-textfield"]');
    cy.checksFocusedAttr("todo-complete-task");

    cy.Press('input[data-testid="todo-complete-task"]');
    cy.checksFocusedAttr("todo-remove-task");

    cy.Press('button[data-testid="todo-remove-task"]', ["Shift", "Tab"]);
    cy.checksFocusedAttr("todo-complete-task");

    cy.Press('input[data-testid="todo-complete-task"]', ["Shift", "Tab"]);
    cy.checksFocusedAttr("todo-textfield");
  });

  it("Should press space and enter", () => {
    cy.pressesFocusedEl('input[data-testid="todo-complete-task"]', "Space");
    cy.checksIfFirstElChecked();

    cy.pressesFocusedEl('button[data-testid="todo-remove-task"]', "Enter");
    cy.checkLength(0);

    cy.createTask("My first task");
    cy.pressesFocusedEl('button[data-testid="todo-remove-task"]', "Space");
    cy.checkLength(0);
  });
});
