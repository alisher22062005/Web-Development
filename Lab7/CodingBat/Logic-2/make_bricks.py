def make_bricks(small, big, goal):
    max_big_use = min(big, goal // 5)
    remainder = goal - (max_big_use * 5)
    return remainder <= small