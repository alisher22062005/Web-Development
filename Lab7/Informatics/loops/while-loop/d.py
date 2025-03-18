import math

num=int(input())
i=0
check=True

while(i!=20):
    if(pow(2,i)==num):
        print("YES")
        check=False
        break
    i+=1

if(check):
    print("NO")
        