import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonEvolutionChainComponent } from './pokemon-evolution-chain/pokemon-evolution-chain.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        PokemonListComponent,
        PokemonDetailsComponent,
        PokemonEvolutionChainComponent,
        PageNotFoundComponent,
        PokemonContainerComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, NgOptimizedImage],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
