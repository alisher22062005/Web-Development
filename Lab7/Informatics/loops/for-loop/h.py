num=int(input())
for i in range(num+1):
    if(i!=0 and num%i==0):
        print(i,end=" ")