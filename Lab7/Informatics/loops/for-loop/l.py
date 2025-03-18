num=input()

length=len(num)-1
ans=0
for i in num:
    ans+=(2**length)*int(i)
    length-=1

print(ans)