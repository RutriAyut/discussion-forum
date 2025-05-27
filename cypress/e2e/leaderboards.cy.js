/**
 * - Leaderboards spec
 *   - should display leaderboards page correctly
 */

describe('Leaderboards spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/leaderboards');
  });

  it('should display leaderboards page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman leaderboards
    cy.get('h2').should('contain', 'Klasmen Pengguna Aktif');
  });
});
