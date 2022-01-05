import "cypress-real-events/support";

describe("Storybook Todo", () => {
  before(() => {
    console.log("before");
    cy.visit("/iframe.html?id=components-todo--main");
  });

  beforeEach(() => {
    console.log("roda antes de cada teste");
    // root-level hook
    // runs before every test block
  });

  afterEach(() => {
    console.log("Roda depois de cada teste");
    // runs after each test block
  });

  after(() => {
    console.log("roda depois de todos os testes");
    // runs once all tests are done
  });

  it("Add task to Todo", () => {
    cy.createTask("My first task");
    cy.createTask("My second task");

    cy.checkLength('ul[data-testid="todo-list-item-container"]', 2);

    cy.checksLastText('li[data-testid="todo-list-item"]', "My first task");
  });

  it("Should complete task in Todo", () => {
    cy.clicksFirst('input[data-testid="todo-complete-task"]');

    cy.checksFirstChecked('input[data-testid="todo-complete-task"]');
  });

  it("Should remove task in Todo", () => {
    cy.clicksFirst('button[data-testid="todo-remove-task"]');

    cy.checkLength('ul[data-testid="todo-list-item-container"]', 1);
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

    cy.checksFirstChecked('input[data-testid="todo-complete-task"]');

    cy.pressFocused('button[data-testid="todo-remove-task"]', "Enter");

    cy.checkLength('ul[data-testid="todo-list-item-container"]', 0);

    cy.createTask("My first task");

    cy.pressFocused('button[data-testid="todo-remove-task"]', "Space");

    cy.checkLength('ul[data-testid="todo-list-item-container"]', 0);
  });
});
