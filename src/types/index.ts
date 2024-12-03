export interface Place {
  id: number
  coords: number[]
  title: string
  region: RegionKey
  country: string
  place: string
  imageSrc: string
  details: {
    locationText: string
    locationHref: string
    time: string
    timeHint: string
    isCoachPossible: boolean
    level: string
    text: string
  }
}
export interface Region {
  key: RegionKey
  title: string
  coords: number[]
}
export type RegionKey = 'southEastAsia'
export type FilterKey = 'country' | 'region'
export type Filter = Record<FilterKey, string>
