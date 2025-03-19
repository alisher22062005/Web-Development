def sum67(nums):
    total = 0
    ignore = False
    for num in nums:
        if num == 6:
            ignore = True
        elif ignore:
            if num == 7:
                ignore = False
            # Skip all numbers when in ignore mode
        else:
            total += num
    return total