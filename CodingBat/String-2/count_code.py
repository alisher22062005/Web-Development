def count_code(str):
  ans=0
  for i in "abcdefghijklmnopqrstuvwxyz":
    pattern="co"+i+"e"
    ans+=str.count(pattern)
    
  return ans