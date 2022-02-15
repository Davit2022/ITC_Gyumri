def f(*arg,x=2):
    newArg=list(arg)
    for i in  range(len(newArg)):
        
         print(newArg[i]*x)
        
        
        
        
f(4,2,3,x=3)
