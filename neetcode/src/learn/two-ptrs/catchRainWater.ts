function catchRainWater(height: number[]): number {

    // First idea
    // Defind what a water trap is
    //  starting boundary and ending boundary
    //  base height (height within boundary)
    //  width
    // Find each individual water trap => 
    //  find the water trap along with calculating the water area (i.e. one traversal)
    //  once a water trap is found, it need to go back and find the amount of water 
    //  can be filled in each position (this is a key observation for better idea)
    //  or 
    //  find all the water traps first, then go through each individual water trap
    // This idea is difficult to implement because there are different cases to consider
    // because of various shape (different boundary height, different base height, etc.)
    // It become more difficult for single traversal solution because it require switch 
    // the index of boundary, backtracking individual water area for each position
    //
    // Second idea (Core)
    //
    // Instead finding all water traps, let keep it simple => 
    // how much water it can fill in a specific position
    //
    // By setting up constraint, we can limit out some factor we need to consider 
    // and focus more => a simple and optimal solution
    //
    // When filling water for a given position, it need to know the starting 
    // boundary, ending boundary, height on the current position.
    //
    // The amount of water is limited by the boundary with lowest height and the height 
    // of the current position
    //
    // **Key** (Draw and do some examples to understand)
    // water = min(maximum_starting_boundary, maximum_ending_boundary) - current_height
    //
    // However, it still need to find out maximum starting boundary and maximum ending 
    // boundary in each location. (Traverse left to right and right to left => then 
    // store them in two array)
    //
    // Here's how two pointers come in handy.
    // With two poitners, it provide a important information:
    //  the "true" / absolute height isn't necessary because the minimum height 
    //  determine the water height
}
