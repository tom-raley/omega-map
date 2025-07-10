import { useContext, type CSSProperties } from "react";
import { FishCard } from "../components/FishCard";
import type { FishObj } from "../types/fish"
import { startCase } from "lodash";
import { useParams } from "react-router";
import { GlobalContext } from "../App";

export function Region() {
    const { regionName } = useParams();
    const regionData = useContext(GlobalContext)
    const region = regionData && regionName ? regionData[regionName] : undefined
    
    const styles: Record<string, CSSProperties> = {
        section: {
            marginBottom: '4rem',
        },
        fishSection: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2rem,'
        }
    }

    return (
        region && (
            <>
                <h1>{startCase(regionName)}</h1>
                <hr/>
                <section style={styles.section}>
                    <h2>Overall Fish Stats</h2>
                    <p>Average Fat Per Serving: {Math.round((region.totalFat / region.fish.length) * 100) / 100}</p>
                    <p>Average Calories Per Serving: {Math.round(region.totalCals / region.fish.length)}</p>
                </section>
                <section style={styles.fishSection}>
                    {region.fish.map((oneFish: FishObj) => (
                        <FishCard key={oneFish.SpeciesName} fish={oneFish} />
                    ))}
                </section>
            </>
        )
    )
}