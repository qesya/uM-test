function doLogin(username: string, password: string) {
  cy.visit('/');
  cy.get('[data-cy=signin-cy]').click();
  cy.url().should('include', '/auth/login');
  cy.get('input[name=email]').type(username);
  cy.get('input[name=password]').type(password).type("{enter}");
  cy.url().should('include', '/home');
}

function closeNotification(){
  cy.get('[data-cy=notif-cy]').click();
}

describe('react code test e2e', () => {
  it('visit dashboard', () => {
    cy.visit('/')
  })

  it('vist sign in page', () => {
    cy.visit('/');
    cy.get('[data-cy=signin-cy]').click();
    cy.url().should('include', '/auth/login');
  })

  it('vist register page', () => {
    cy.visit('/');
    cy.get('[data-cy=signup-cy]').click();
    cy.url().should('include', '/auth/register');
  })

  it('do login', () => {
    doLogin('joe@bloggs.com', 'letmein123');
  })

  it('do register', () => {
    cy.visit('/');
    cy.get('[data-cy=signup-cy]').click();
    cy.url().should('include', '/auth/register');
    cy.get('input[name=firstName]').type('Joe');
    cy.get('input[name=lastName]').type('Bloggs');
    cy.get('input[name=email]').type('joe@bloggs.com');
    cy.get('input[name=password]').type('letmein123')
    cy.get('input[name=confirmPassword]').type('letmein123').type("{enter}");
    cy.url().should('include', '/home');
  })

  it('do change password', () => {
    doLogin('joe@bloggs.com', 'letmein123');
    closeNotification();
    cy.get('[data-cy=change-password-cy').click();
    cy.get('input[name=old_password]').type('letmein123');
    cy.get('input[name=new_password]').type('newpassword123').type("{enter}");
    cy.url().should('include', '/home');
  })

  it('do logout', () => {
    doLogin('joe@bloggs.com', 'letmein123');
    closeNotification();
    cy.get('[data-cy=logout-cy]').click();
    cy.url().should('include', '/');
  })
})