import type { FishObj } from "./fish"

export interface RegionObj {
    fish: FishObj[]
    avgFat: number
    avgCals: number
    totalFat: number
    totalCals: number
}

export interface RegionData {
    [key: string]: RegionObj
}