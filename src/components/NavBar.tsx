import { useContext, type CSSProperties } from "react"
import { Link } from "react-router"
import { startCase } from "lodash"
import { GlobalContext } from "../App"

export function NavBar() {
    const regionData = useContext(GlobalContext)
    const styles: Record<string, CSSProperties> = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
        },
        navLogo: {
            listStyleType: 'none',
            display: 'flex',
            gap: '1rem',
            paddingLeft: 0,
            fontSize: '2rem',
        },
        navList: {
            listStyleType: 'none',
            display: 'flex',
            gap: '1rem',
            fontSize: '1.5rem',
            color: '#02AEB1'
        },
    }

    return (
        <nav style={styles.nav}>
            <ul style={styles.navLogo}>
                <li>
                    <Link to='/'>OmegaMap Ω</Link>
                </li>
            </ul>
            <ul style={styles.navList}>
                {regionData && (
                    Object.keys(regionData).map((regionName) => (
                        <li key={regionName}>
                            <Link to={`/regions/${regionName}`}>
                                {startCase(regionName)}
                            </Link>
                        </li>
                    ))        
                )}
            </ul>
        </nav>
    )
}