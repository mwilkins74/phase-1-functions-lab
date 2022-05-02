const HQ = 42

function distanceFromHqInBlocks(blocks) {
    if (blocks > HQ) {
    return blocks - `${HQ}`
} else if (blocks < HQ) {
    return `${HQ}` - blocks
}}

function distanceFromHqInFeet(blocks) {
    if (blocks > HQ) {
        return (blocks - `${HQ}`) * 264
    } else if (blocks < HQ) {
        return (`${HQ}` - blocks) * 264
    }}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    return (distanceTravelledInFeet(start, destination) - 400) * .02 
    } else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
    return 25
    } else if (distanceTravelledInFeet(start, destination) >= 2500) {
    return 'cannot travel that far'
    }
}