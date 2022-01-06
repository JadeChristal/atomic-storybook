import "cypress-real-events/support";

describe("Storybook Todo", () => {
  it("Add task to Todo", () => {
    cy.createTask("My first task");
    cy.createTask("My second task");

    cy.checkLength("", 2);

    cy.checksLastText("My first task");
  });

  it("Should complete task in Todo", () => {
    cy.clicksFirst('input[data-testid="todo-complete-task"]');

    cy.checksFirstChecked();
  });

  it("Should remove task in Todo", () => {
    cy.clicksFirst('button[data-testid="todo-remove-task"]');

    cy.checkLength("", 1);
  });

  it("Should navigate using tabs", () => {
    cy.Tab('input[data-testid="todo-textfield"]');

    cy.checksFocusedAttr("todo-complete-task");

    cy.Tab('input[data-testid="todo-complete-task"]');

    cy.checksFocusedAttr("todo-remove-task");

    cy.Tab('button[data-testid="todo-remove-task"]', ["Shift", "Tab"]);

    cy.checksFocusedAttr("todo-complete-task");

    cy.Tab('input[data-testid="todo-complete-task"]', ["Shift", "Tab"]);

    cy.checksFocusedAttr("todo-textfield");
  });

  it("Should press space and enter", () => {
    cy.pressFocused('input[data-testid="todo-complete-task"]', "Space");

    cy.checksFirstChecked();

    cy.pressFocused('button[data-testid="todo-remove-task"]', "Enter");

    cy.checkLength("", 0);

    cy.createTask("My first task");

    cy.pressFocused('button[data-testid="todo-remove-task"]', "Space");

    cy.checkLength("", 0);
  });
});
