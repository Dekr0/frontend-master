function minEatingSpeed(piles: number[], h: number): number {
    let low = 1, high = Math.max(...piles);
    let i = 0, timetake = 0;
    let min = high;
    do {
       const mid = Math.floor((low + high) / 2);
       timetake = 0;
       for (i = 0; i < piles.length; i++) {
           const pile = piles[i];
           timetake += Math.ceil(pile / mid);
       }
       if (timetake > h)
           low = mid + 1;
       else {
           min = Math.min(min, mid);
           high = mid;
       }
    } while (low < high);
    
    return min;
}
