function audienceOverlap(market1: number[], market2: number[]): boolean {
    const market2Set = new Set(market2);

    for (const member of market1) {
        if (market2Set.has(member)) {
            return true;
        }
    }

    return false;
}