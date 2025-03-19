def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        # If the current number is 13, skip it and the next number
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
    return total