import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain/pokemon-evolution-chain.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';

const routes: Routes = [
    {
        path: 'pokemon-list',
        component: PokemonContainerComponent,
        children: [
            {
                path: '',
                title: 'Pokemon list',
                component: PokemonListComponent,
            },
            {
                path: ':id/details',
                title: 'Pokemon details',
                component: PokemonDetailsComponent,
            },
            {
                path: ':id/evolution-chain',
                title: 'Pokemon evolution chain',
                component: PokemonEvolutionChainComponent,
            },
        ],
    },
    { path: '', redirectTo: '/pokemon-list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
