array A and array B
median(s) will divide a sequence into two partitions with equal length
 - everything in the left partiion is less than / equal to everything in 
 the right parition (regardless what order the left partition has)
 - left partiion is formed by the some elements of two sorted arrays but 
 the amount of element each array will allocate is not equal
     - example: 1 5 7 8 11 and 12 13 14, array B allocate 0 elmenet and array 
     A allocates all 3
     - example: 1 5 7 8 11 and 0 9, array B allocate 1 element and array 
     A allocate 2 elements
One can draw the boundary (low and high) for each array to indicate which region
in each array is used for left partion or right partiion
Once the boundary is drawn, the boundary will give a characteristic of which everything in left boundary of one array is smaller than everything in right boundary of another array
 - example for (1 5 7 8 11) and (0 4 9), left is (1) and (0 4) => 4 is less than (7 8 11) and 1 is less than (9)
The property can be use as binary search
