def power(base:float,p:int)->float:
    return pow(base,p)

values=input().split()

ans=power(float(values[0]),int(values[1]))
print(ans)