export interface Place {
    id: number
    title: string
    continent: string
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