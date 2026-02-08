function processIDs(ids: number[]): number[] {
    let uniqueIDsSet: Set<number> = new Set<number>(ids);
    let uniqueIDsArray: Array<number> = Array.from(uniqueIDsSet);
    return uniqueIDsArray;
}