import PokemonListPageObject from './PokemonList.page-object';

describe('Project list', () => {
    let pokemonListPO: PokemonListPageObject;

    beforeEach(() => {
        cy.visit('/pokemon-list');
        pokemonListPO = new PokemonListPageObject();
    });

    it('pokemon list should be visible', () => {
        pokemonListPO.getPokemonList().should('be.visible');
    });

    it('the list should contain 8 cards', () => {
        pokemonListPO.getPokemonCardsInAList().as('cards').should('have.length', 8);
    });

    it('test first card', () => {
        pokemonListPO
            .getPokemonCardsInAList()
            .first()
            .then((firstCard) => {
                pokemonListPO
                    .getCardTitle(cy.wrap(firstCard))
                    .contains('bulbasaur')
                    .should('be.visible');
            });
    });

    it('test forward navigation', () => {
        cy.wait(400);
        pokemonListPO
            .getNextButton()
            .click()
            .then(() => {
                cy.wait(400);
                pokemonListPO.getPokemonCardsInAList().then((cards) => {
                    cy.wrap(cards[8]).should('be.visible');
                    pokemonListPO.getCardTitle(cy.wrap(cards[8])).contains('blastoise');

                    cy.wrap(cards[0]).should('not.be.visible');
                    pokemonListPO.getCardTitle(cy.wrap(cards[0])).contains('bulbasaur');

                    cy.wrap(cards[16]).should('not.be.visible');
                    pokemonListPO.getCardTitle(cy.wrap(cards[16])).contains('pidgeotto');
                });
            });
    });

    it('test backwards navigation', () => {
        cy.wait(400);
        pokemonListPO
            .getNextButton()
            .click()
            .then(() => {
                pokemonListPO.getPokemonCardsInAList().then((cards) => {
                    cy.wrap(cards[0]).should('not.be.visible');
                    pokemonListPO.getCardTitle(cy.wrap(cards[0])).contains('bulbasaur');

                    cy.wait(400);
                    pokemonListPO
                        .getPrevButton()
                        .click()
                        .then(() => {
                            cy.wrap(cards[0]).should('be.visible');
                            pokemonListPO.getCardTitle(cy.wrap(cards[0])).contains('bulbasaur');
                        });
                });
            });
    });
});
