speed=int(input())
time=int(input())
 
if(speed>0):
    print((speed*time)%109)
else :
    print(((speed*time)%109))