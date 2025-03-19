def xyz_there(str):
  valid=str.count("xyz")
  invalid=str.count(".xyz")
  
  if invalid<valid:
    return True
  else:
    return False