import { camelCase } from 'lodash'
import type { RegionData } from "../types/regions"
import type { FishObj } from "../types/fish"

export function buildRegionObjs(data: FishObj[]): RegionData {
    const regions: RegionData = {}
    
    data.forEach((fishObj: FishObj) => {
        const region = camelCase(fishObj.NOAAFisheriesRegion)
        const cals = parseInt(fishObj.Calories || '0')
        const fatStr = fishObj.FatTotal
        const fat = parseFloat(fatStr?.replace(' g', '') || '0')
        
        if(regions[region]) {
            regions[region].fish.push(fishObj)
            regions[region].totalCals += cals
            regions[region].totalFat += fat

        } else {
            regions[region] = {
                fish: [
                    fishObj
                ],
                totalCals: cals,
                totalFat: fat,
                avgFat: fat,
                avgCals: cals
            }
        }
    })

    return regions
}