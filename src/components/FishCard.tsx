import type { CSSProperties } from "react"
import type { FishObj } from "../types/fish"

interface FishCardProps {
    fish: FishObj
}

export function FishCard(props: FishCardProps) {
    const { fish } = props
    const { SpeciesName, ImageGallery, FatTotal, Calories, Taste, Texture } = fish

    const styles: Record<string, CSSProperties> = {
        section: {
            backgroundColor: '#E0F7FA',
            width: '360px',
            padding: '1rem',
            marginBottom: '4rem',
        },
        img: {
            width: '130px',
            height: '130px',
        }
    }
    
    return (
        <section key={SpeciesName} style={styles.section}>
            <h2>{SpeciesName}</h2>
            {ImageGallery?.length ? <img src={ImageGallery[0].src} alt={ImageGallery[0].alt} style={styles.img} /> : null}
            <hr/>
            <h3>Fat Per Serving: {FatTotal}</h3>
            <h3>Calories Per Serving: {Calories}</h3>
            <div dangerouslySetInnerHTML={{ __html: Taste }}></div>
            <div dangerouslySetInnerHTML={{ __html: Texture }}></div>
        </section>
    )
}