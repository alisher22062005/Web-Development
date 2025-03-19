def alarm_clock(day, vacation):
    # Determine if it's a weekend: 0 (Sun) or 6 (Sat)
    weekend = (day == 0 or day == 6)
    
    if vacation:
        if weekend:
            return "off"
        else:
            return "10:00"
    else:
        if weekend:
            return "10:00"
        else:
            return "7:00"
  
