def centered_average(nums):
    # Create a copy so we don't modify the original list
    nums_copy = nums[:]
    # Remove one instance of the smallest and one instance of the largest value.
    nums_copy.remove(min(nums_copy))
    nums_copy.remove(max(nums_copy))
    # Use integer division to compute the average of the remaining numbers.
    return sum(nums_copy) // len(nums_copy)