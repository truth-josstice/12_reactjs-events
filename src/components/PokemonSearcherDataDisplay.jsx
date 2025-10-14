
/* 
<PokemonSearcherDataToDisplay
    nameToShow={this.state.responseName}
    imageToShow={this.state.responseSpriteUrl}
/> 
*/

export function PokemonSearcherDataToDisplay({nameToShow, imageToShow}){

    if (nameToShow == "" || imageToShow == "") {
        return null
    } else {
        return <section className="pokemonDataDisplay">
            <h1>{nameToShow}</h1>
            <img src ={imageToShow} alt={`Sprite of the Pokemon {nameToShow}`} />
        </section>
    }
}