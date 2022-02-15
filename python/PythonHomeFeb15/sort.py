
from collections import OrderedDict


def sortArguments(**kv):
    sort = OrderedDict(sorted(kv.items()))
    print(sort)


sortArguments(bb=10,cc=7,aa=5)    