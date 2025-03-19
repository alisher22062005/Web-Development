def make_chocolate(small, big, goal):
   
    max_big = min(big, goal // 5)
    remainder = goal - (max_big * 5)
    if small >= remainder:
        return remainder
    return -1