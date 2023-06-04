export default class PokemonListPageObject {
    getPokemonList() {
        return cy.get('[data-cy="pokemon-list"]');
    }

    getPokemonCardsInAList() {
        return cy.get('[data-cy="pokemon-list"] [data-cy="pokemon-card"]');
    }

    getCardTitle(card: Cypress.Chainable<JQuery<HTMLElement>>) {
        return card.find('[data-cy="card-title"]');
    }

    getNextButton() {
        return cy.get('[data-cy="next"]');
    }

    getPrevButton() {
        return cy.get('[data-cy="prev"]');
    }
}
