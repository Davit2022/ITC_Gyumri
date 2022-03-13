from calendar import c
from tracemalloc import start
from turtle import pos


class Checker:
    def __init__(self,pos,start,end):
        self.pos = pos
        self.start = start
        self.end = end
        
    
class Rook(Checker):
    pos = ''
    start = ''
    end = ''
    def __init__(self,pos,start,end):
        super().__init__(pos,start,end)
        self.pos = pos
        self.start = start
        self.end = end
    
    def run(self):
        if self.start == self.end:
            return False
        if self.pos == 'Rook':
            return (self.start[0] == self.end[0]) or (self.start[1] == self.end[1])
    
class King(Checker):
    pos = ''
    start = ''
    end = ''
    def __init__(self,pos,start,end):
        super().__init__(pos,start,end)
        self.pos = pos
        self.start = start
        self.end = end
    
    def run(self):
        if self.start == self.end:
            return False
        if self.pos == 'King':
            # for i in range(8):
                # for j in range(8):
                    # print(i)
                return (self.start[0] == self.end[1]) or (self.start[1] == self.end[0])


if __name__ == '__main__':
    ro = Rook("Rook","a1","a2") 
    king = King("King","a1","a2")
    print(ro.run())
    print(king.run())

    