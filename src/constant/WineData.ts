
import BrandyUrl from "../assets/wines/brandy.png"
import ChampagneUrl from "../assets/wines/champagne.png"
import ClassicBeerUrl from "../assets/wines//classicBeer.png"
import DarkBeerUrl from "../assets/wines/darkBeer.png"
import RedWineUrl from "../assets/wines/redWine.png"
import RoseWineUrl from "../assets/wines/roseWine.png"
import WhiteWineUrl from "../assets/wines/whiteWine.png"



export interface Wine {
    name:string
    description:string
    image:string
}


export const wineData:Wine[] =[
    {
        name: "Brandy Erebuni",
        description: "Noy 50 years old brandy has been kept and aged in historical cellars of the factory which are also called `The Rooms of Heaven`",
        image: BrandyUrl
    },
    {
        name: "Champagne",
        description: "Champagne is a sparkling wine originated and produced in the Champagne wine region of France under the rules of the appellation",
        image: ChampagneUrl
    },
    {
        name: "Classic Beer",
        description: "Beer is an alcoholic beverage produced by extracting raw materials with water, boiling (usually with hops), and fermenting",
        image: ClassicBeerUrl
    },
    {
        name: "Dark Beer",
        description: "Dark beer is characterised by its dark colour, which can range from deep brown to almost black",
        image: DarkBeerUrl
    },
    {
        name: "Red Wine",
        description: "Red wine is a type of wine made from dark-colored grape varieties",
        image: RedWineUrl
    },
    {
        name: "Rose Wine",
        description: "The flavors lean on the fruity side, so you can expect notes of strawberry, citrus, melon, raspberry, cherry, and fresh flowers",
        image: RoseWineUrl
    },
    {
        name: "White Wine",
        description: "White wine is mainly from `white` grapes, which are green or yellow in colour",
        image: WhiteWineUrl
    }
]