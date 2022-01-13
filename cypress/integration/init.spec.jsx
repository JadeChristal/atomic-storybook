import "cypress-real-events/support";

describe("Storybook Todo", () => {
  before(() => {
    cy.visit("/iframe.html?id=components-todo--main");
  });
  it("Add task to Todo", () => {
    cy.createTask("My first task");
    cy.createTask("My second task");
    cy.wait(1000);

    cy.checkLength(2);
    cy.checksLastText("My first task");
    cy.wait(1000);
  });

  it("Should complete task in Todo", () => {
    cy.clicksFirstElement('input[data-testid="todo-complete-task"]');
    cy.wait(1000);
    cy.checksIfFirstElChecked();
  });

  it("Should remove task in Todo", () => {
    cy.wait(1000);
    cy.clicksFirstElement('button[data-testid="todo-remove-task"]');
    cy.wait(1000);
    cy.checkLength(1);
  });

  it("Should navigate using tabs", () => {
    cy.wait(1000);
    cy.Press('input[data-testid="todo-textfield"]');
    cy.wait(1000);
    cy.checksFocusedAttr("todo-complete-task");
    cy.wait(1000);

    cy.Press('input[data-testid="todo-complete-task"]');
    cy.wait(1000);
    cy.checksFocusedAttr("todo-remove-task");
    cy.wait(1000);

    cy.Press('button[data-testid="todo-remove-task"]', ["Shift", "Tab"]);
    cy.wait(1000);
    cy.checksFocusedAttr("todo-complete-task");
    cy.wait(1000);

    cy.Press('input[data-testid="todo-complete-task"]', ["Shift", "Tab"]);
    cy.wait(1000);
    cy.checksFocusedAttr("todo-textfield");
  });

  it("Should press space and enter", () => {
    cy.wait(1000);
    cy.pressesFocusedEl('input[data-testid="todo-complete-task"]', "Space");
    cy.wait(1000);
    cy.checksIfFirstElChecked();
    cy.wait(1000);
    cy.pressesFocusedEl('button[data-testid="todo-remove-task"]', "Enter");
    cy.wait(1000);
    cy.checkLength(0);

    cy.wait(1000);
    cy.createTask("My first task");
    cy.wait(1000);
    cy.pressesFocusedEl('button[data-testid="todo-remove-task"]', "Space");
    cy.wait(1000);
    cy.checkLength(0);
  });
});
