function frequentUser(visits: number[]): number {
    const threshold: number = visits.length / 4;
    const visitCount: Map<number, number> = new Map();
    
    for (const visit of visits) {
        const currentCount = visitCount.get(visit) ?? 0;
        const newCount = currentCount + 1;
        visitCount.set(visit, newCount);

        if (newCount > threshold) {
            return visit;
        }
    }

    return -1;
}

console.log(`Frequent User: ${frequentUser([1,2,3,1,2,3,1,2,3,1])}`);  // Expected output: 1
console.log(`Frequent User: ${frequentUser([5,0,5,0,5,0,5,0,1,1,1,1,1])}`);  // Expected output: 5
// Explanation: All users here have more visits than 13/4, so we return the one that appears first in the array, which is 5
console.log(`Frequent User: ${frequentUser([3,2,2,1,3,2,3,0,0,1,1,4])}`);  // Expected output: -1