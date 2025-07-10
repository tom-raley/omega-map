import { startCase } from "lodash"
import type { CSSProperties } from "react"
import type { RegionObj } from "../types/regions"

interface RegionCardProps {
    regionName: string
    regionObj: RegionObj
}

export function RegionCard(props: RegionCardProps) {
    const {regionName, regionObj} = props

    const styles: Record<string, CSSProperties> = {
        section: {
            backgroundColor: '#E0F7FA',
            width: '360px',
            padding: '1rem',
            marginBottom: '4rem',
        }
    }
    
    return (
        <section key={regionName} style={styles.section}>
            <h2>{startCase(regionName)}</h2>
            <hr/>
            <h3>Average Fat Per Serving: {Math.round((regionObj.totalFat / regionObj.fish.length) * 100) / 100}</h3>
            <h3>Average Calories Per Serving: {Math.round(regionObj.totalCals / regionObj.fish.length)}</h3>
        </section>
    )
}