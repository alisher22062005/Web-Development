def front_back(str):
  if len(str)==1:
    return str
    
  else:
    ans=""
    for i in range(len(str)):
      if i==0:
        ans+=str[len(str)-1]
        continue
      
      if i==len(str)-1:
        ans+=str[0]
        continue
        
      ans+=str[i]
      
      
    return ans