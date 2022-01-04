import 'cypress-real-events/support';

describe('Storybook Todo', () => {
  before(() => {
    cy.visit('/iframe.html?id=components-todo--main');
  });

  it('Add task to Todo', () => {
    cy.get('input[data-testid="todo-textfield"]')
      .type('My first task')
      .realPress('Enter');

    cy.get('input[data-testid="todo-textfield"]')
      .type('My second task')
      .realPress('Enter');

    cy.get('li[data-testid="todo-list-item"]').should('have.length', 2);
    cy.get('li[data-testid="todo-list-item"]')
      .last()
      .should('have.text', 'My first task');
  });

  it('Should complete task in Todo', () => {
    cy.get('input[data-testid="todo-complete-task"]').first().click();
    cy.get('input[data-testid="todo-complete-task"]')
      .first()
      .check()
      .should('be.checked');
  });

  it('Should remove task in Todo', () => {
    cy.get('button[data-testid="todo-remove-task"]').first().click();
    cy.get('li[data-testid="todo-list-item"]').first().should('have.length', 1);
  });

  it.skip('Should navigate using tabs', () => {
    cy.focused().should('have.attr', 'data-testid', 'todo-textfield');

    cy.get('input[data-testid="todo-textfield"]')
      .type('My fisrt task')
      .realPress('Enter')
      .realPress('Tab');
    cy.focused().should('have.attr', 'data-testid', 'todo-complete-task');

    cy.get('input[data-testid="todo-complete-task"]').realPress('Tab');
    cy.focused().should('have.attr', 'data-testid', 'todo-remove-task');
  });
});
