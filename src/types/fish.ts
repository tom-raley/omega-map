export interface FishImg {
    src: string
    alt: string
    title: string
}

export interface FishObj {
    SpeciesName: string
    ImageGallery: FishImg[]
    FatTotal: string
    Calories: string
    NOAAFisheriesRegion: string
    Taste: string
    Texture: string
}