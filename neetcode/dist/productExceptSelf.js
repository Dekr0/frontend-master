/*
    * Record down the prefix and postfix => use prefix and postfix to compute the result
    * Linearly walk through the array forward and backward to collect prefix and postfix
    * */
function productExceptSelf(nums) {
    const answers = new Int32Array(nums.length);
    let i = 0;
    let prod = undefined;
    for (i = 0; i < nums.length; i++) {
        if (i === 0) {
            answers[i] = 1;
        }
        else {
            if (prod === undefined) {
                prod = nums[i - 1];
            }
            else {
                prod *= nums[i - 1];
            }
            answers[i] = prod;
        }
    }
    console.log(answers);
    prod = nums[--i];
    for (i = i - 1; i >= 0; i--) {
        answers[i] *= prod;
        prod *= nums[i];
    }
    return Array.from(answers.values());
}
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
