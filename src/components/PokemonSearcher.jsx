import React from "react";


export class PokemonSearcher extends React.Component {
    constructor(){
        super();

        this.state = {
            pokemonToSearch: "pikachu",
            responseName: "",
            responseSpriteUrl: "",
            
            // Saving a whole API response can often give you a huge amount of unnecessary data
            // response: {}
        }
    }

    render(){
        return <section className="pokemonSearcherContainer">
            {/* <PokemonSearcherForm 
                currentSearchFieldValue={pokemonToSearch}
                searchValueUpdateFunction={() => {this.setState({})}
                formSubmissionHandler={() => {}}
            /> */}
            {/* <PokemonSearcherDataToDisplay
                nameToShow={this.state.responseName}
                imageToShow={this.state.responseSpriteUrl}
                />
            */}
        </section>
    }
}