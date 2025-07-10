import { useEffect, useState, createContext } from "react";
import { buildRegionObjs } from "./helpers/buildRegionObjs";
import type { RegionData } from "./types/regions";
import { Outlet } from "react-router";
import { NavBar } from "./components/NavBar";
import type { FishObj } from "./types/fish";

export const GlobalContext = createContext<RegionData | undefined>(undefined);

export function App() {
    const [regionData, setRegionData] = useState<RegionData>()
    async function fetchData() {
        const API_KEY = import.meta.env.VITE_API_KEY
        const API_URL = import.meta.env.VITE_API_BASE_URL
        const url = `${API_URL}/gofish?apikey=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json: FishObj[] = await response.json();
            const regions: RegionData = buildRegionObjs(json)
            setRegionData(regions)
        } catch (error: unknown) {
            if(error instanceof Error) {
                console.error(error.message);
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <GlobalContext.Provider value={regionData}>
            <NavBar />
            <Outlet/>
        </GlobalContext.Provider>
    );
};
