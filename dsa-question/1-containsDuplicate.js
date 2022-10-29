// Input: nums = [1,2,3,1]
// Output: true

var containsDuplicate = (nums) => {
    for (let right = 0 ; right < nums.length ; right++){
        for(let left = 0 ; left < right; left++){
            const isDuplicate = nums[left] == nums[right];
            if(isDuplicate)
            return true;
        }
    }
    return false;
}

const nums = [1,2,3,4,5,6,1]
console.log(containsDuplicate(nums))


var ContainsDuplicate = (num) => {
    const numsSet = new Set(num);
    const isEqual = numsSet.size === num.length;

    return !isEqual;
};

const num = [1,2,3,4,5,6,7]
console.log(ContainsDuplicate(num))
