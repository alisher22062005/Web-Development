def string_splosion(str):
  ans=""
  for i in range(len(str)):
    for j in range(i):
      ans+=str[j]
      
  return ans+str
      
