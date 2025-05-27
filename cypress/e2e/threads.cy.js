/**
 * - Threads spec
 *   - should display threads page correctly
 *   - should display threads page correctly when the user is login
 */

describe('Threads spec', () => {
  it('should display threads page correctly', () => {
    cy.visit('http://localhost:5173/');
    // memverifikasi elemen yang harus tampak pada halaman threads
    cy.get('p').should('contain', 'Filter Berdasarkan Kategori :');
    cy.get('h2').should('contain', 'Diskusi Tersedia');
  });

  it('should display threads page correctly when the user is login', () => {
    cy.login('hai@mail.com', 'hai123');
    cy.visit('http://localhost:5173/');
    // memverifikasi elemen yang harus tampak pada halaman threads ketika login
    cy.get('p').should('contain', 'Filter Berdasarkan Kategori :');
    cy.get('h2').should('contain', 'Diskusi Tersedia');
    cy.get('.bi.bi-plus-circle-fill');
  });
});
