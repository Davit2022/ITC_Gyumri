
def  weapon_assigner(**kv):  
    n=kv['name']
    h=kv['height']
    w=kv['weight']
    res=[]
    res.append(n)
    if h>180 and w<75:
        res.append("SVD")
    elif h>180 and w>75 and w<125:
        res.append("PK")  
    elif h<180 and h>165 and w>60 and w<=75:
        res.append("RPK-74 ") 
    else:
        res.append("AK-74")         
    print(res)


weapon_assigner(name='petros',height=189,weight=80)    