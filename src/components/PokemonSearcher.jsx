import React from "react";
import { PokemonSearcherDataToDisplay } from "./PokemonSearcherDataDisplay";
import { PokemonSearcherForm } from "./PokemonSearcherForm";

export class PokemonSearcher extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonToSearch: "pikachu",
      responseName: "",
      responseSpriteUrl: "",

      // Saving a whole API response can often give you a huge amount of unnecessary data
      // response: {}
    };

    this.forSubmissionHandlerFunction = this.formSubmissionHandlerFunction.bind(this);
  }

  // have an event for handling for submission

  async formSubmissionHandlerFunction (formSubmissionEvent) {
    formSubmissionEvent.preventDefault();
    console.log("Form submission interrupted! Can do our custom form submission logic now!")

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.state.pokemonToSearch);

    let data = await response.json();

    this.setState((previousState) => {
        return {...previousState, 
            responseName: data.name,
            responseSpriteUrl: data.sprites.other.home.front_default
        }
    })
  }

    // async formSubmissionHandlerFunction (formSubmissionEvent) {
    //         formSubmissionEvent.preventDefault();
    //         console.log("Form submission interrupted! Can do our custom form submission logic now!");
    //         let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + this.state.pokemonToSearch);
    //         let data = await response.json();
    //         this.setState((previousState) => {
    //             return {...previousState,
    //                 responseName: data.name,
    //                 responseSpriteUrl: data.sprites.other.home.front_default
    //             }
    //         })
    //     }

  render() {
    return (
      <section className="pokemonSearcherContainer">
        <PokemonSearcherForm
          currentSearchFieldValue={this.state.pokemonToSearch}
          searchValueUpdateFunction={(newSearchValue) => {
            this.setState((previousState => {
                return {...previousState, pokemonToSearch: newSearchValue}
            }))
          }}
          formSubmissionHandler={this.forSubmissionHandlerFunction}
        />
        <PokemonSearcherDataToDisplay
          nameToShow={this.state.responseName}
          imageToShow={this.state.responseSpriteUrl}
        />
      </section>
    );
  }
}
