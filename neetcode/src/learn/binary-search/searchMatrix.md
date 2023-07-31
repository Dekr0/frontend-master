Each row is sorted (increasing order)
First integer of each row is greater than the last integer of the previous row
Each column is in increasing order (implictiy)

Solution one:
For each row, perform binary search
 => if false in one row, go to the next row
Time Complexity => mlog(n) => log(n^m)

Solution two:
Perform binary search in column-wise => locate which row to perform 
actual binary search
Time Complexity => log(m) + log(n) = log(m * n)

Column-wise binary search
