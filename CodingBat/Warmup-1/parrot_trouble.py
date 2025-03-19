def parrot_trouble(talking, hour):
  if talking==True and (hour<7 or (hour>20 and hour<=23)):
    return True
  else:
    return False