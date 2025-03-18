num=int(input())
if num%400==0  or(num%100!=0 and num%4==0) :
    print("YES")
else:
    print("NO")