def caught_speeding(speed, is_birthday):
    # On your birthday, allow an extra 5 mph
    if is_birthday:
        speed -= 5
        
    # Check the speed thresholds
    if speed <= 60:
        return 0  # No ticket
    elif speed <= 80:
        return 1  # Small ticket
    else:
        return 2  # Big ticket