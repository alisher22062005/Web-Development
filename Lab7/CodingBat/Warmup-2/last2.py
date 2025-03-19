def last2(str):
  match=str[len(str)-2:len(str)]
  cnt=0
  for i in range(1,len(str)-1):
    if str[i-1]+str[i]==match:
      cnt+=1
      
  return cnt
    
