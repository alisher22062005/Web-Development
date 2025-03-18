size=int(input())
arr=input().split()
check=True
for i in range(1,size):
    if(int(arr[i])>=0 and int(arr[i-1])>=0):
        print("YES")
        check=False
        break

    if(int(arr[i])<=0 and int(arr[i-1])<=0):
        print("YES")
        check=False
        break

if(check):
    print("NO")

