size=int(input())
arr=input().split()
cnt=0
for i in range(size):
    if(arr[i]>=0):
        cnt+=1
print(cnt)
