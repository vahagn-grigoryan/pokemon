# Gotta Code 'Em All!

Web application that uses the Pokemon API to display a list of Pokemon and their details. 
The application has two pages: a list of Pokemon and a detail page for each individual Pokemon. 
The detail page displays the selected Pokemon's evolutions, if any.

## API Documentation

- [Pokemon API Documentation](https://pokeapi.co/docs/v2)
- Endpoint for Pokemon List: `https://pokeapi.co/api/v2/pokemon`
- Endpoint for Pokemon Details: `https://pokeapi.co/api/v2/pokemon/{id or name}/`
- Endpoint for Pokemon Evolution Chain: `https://pokeapi.co/api/v2/evolution-chain/{id}/`

## Tech stack

- The project is set up using `node v18.16.0`
- using Angular + TypeScript

## Acceptance Criteria

- A list of 10 Pokemon should be displayed on the list page, including their names and images.
- Users should be able to navigate in the list using next and previous buttons to get 10 new Pokemon.
- Clicking on a Pokemon in the list should navigate to the detail page, which should display the Pokemon's name, image, abilities (names), and evolutions (if any).
- If the selected Pokemon has evolutions, they should be displayed as a list with their images and names. Clicking on an evolution should navigate to its detail page.
- Users should be able to navigate between the list and detail pages using the browser's back and forward buttons.
- Users should be able to bookmark their favorite Pokemon's details page.

## Tests

- Project uses Cypress to test for bullet points 1 and 2 in the acceptance criteria.

### Prettify
`npm run prettify` runs prettier over your `*.ts`, `*.scss`, and `*.html` files.

### Lint
`npm run lint` lints the project.

### Before each git commit!
Please run `npm run is-fe-green`. It will prettify, lint, and test (unit + e2e) the project to decrease the chance of your build pipeline failing.

This will perform all the steps to build a pipeline on your machine.
This can save us from possible frustration and waste of time.

### End-to-end tests
`npm run test-e2e` executes Cypress end-to-end tests.