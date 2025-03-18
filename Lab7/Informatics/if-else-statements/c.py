testAnswer=int(input())
studentAnswer=int(input())


if(testAnswer==1 and studentAnswer==1):
    print("YES")
elif(testAnswer!=1 and studentAnswer==1):
    print("NO")
elif (testAnswer==1 and studentAnswer!=1):
    print("NO")