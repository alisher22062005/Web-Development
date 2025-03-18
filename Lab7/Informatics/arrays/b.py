size=int(input())
ar=(input().split())


for i in range(len(ar)):
    if(int(ar[i])%2==0):
        print(ar[i],end=" ")