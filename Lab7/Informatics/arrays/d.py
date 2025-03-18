size=int(input())
arr=input().split()
cnt=0
for i in range(1,size):
    if(int(arr[i])>int(arr[i-1])):
        cnt+=1

print(cnt)