/**
 * - Thread spec
 *   - should display thread page correctly
 */

describe('Thread spec', () => {
  it('should display thread page correctly', () => {
    cy.visit('http://localhost:5173/thread/thread-91KocEqYPRz68MhD');

    // memverifikasi elemen yang harus tampak pada halaman thread
    cy.get('h3').should('contain', 'Halo! Selamat datang dan silakan perkenalkan diri kamu');
  });

  it('should display thread page correctly when the user is login', () => {
    cy.login('hai@mail.com', 'hai123');
    cy.visit('http://localhost:5173/thread/thread-91KocEqYPRz68MhD');

    // memverifikasi elemen yang harus tampak pada halaman thread ketika login
    cy.get('h5').should('contain', 'Beri Komentar');
    cy.get('button').contains(/^Kirim$/).should('be.visible');
  });
});
