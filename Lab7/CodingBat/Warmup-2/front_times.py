def front_times(str, n):
  ans=""
  if len(str)>=3:
    for i in range(0,n):
      ans+=str[0:3]
  
  else:
    ans=str
    for i in range(3):
      ans+=str
      
  return ans
      
    
