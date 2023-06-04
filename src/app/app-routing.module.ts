import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
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
