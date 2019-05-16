function twoSum(nums, target){
    const hash = new Map();
    for (let i = 0; i < nums.length; i++){
        if (hash.get(nums[i]) !== undefined) return [hash.get(nums[i]), i];
        else hash.set(target - nums[i], i);
    }
}