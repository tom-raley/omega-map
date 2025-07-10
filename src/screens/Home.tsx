import { useContext, type CSSProperties } from 'react'
import { RegionCard } from '../components/RegionCard';
import { Outlet } from 'react-router';
import { useLocation } from 'react-router';
import { GlobalContext } from '../App';

export function Home() {
    // Object with region keys
    // Each region key contains a fish key with an array of fish objs
    // and int with average calories and fat per serving

    const { pathname } = useLocation()
    const regionData = useContext(GlobalContext);

    const styles: Record<string, CSSProperties> = {
        section: {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '2rem,'
        }
    }

    return (
        <>
            {pathname !== '/' ? <Outlet/> : <section style={styles.section}>
                {regionData && (
                    Object.entries(regionData).map(([regionName, regionObj]) => (
                        <RegionCard key={regionName} regionName={regionName} regionObj={regionObj} />
                    ))
                )}
            </section>}
        </>
    )
}