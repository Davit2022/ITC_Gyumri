
from abc import ABC, abstractmethod

class Products(ABC):
 
    def sell(self):
        pass

class Wine(Products): 
    def sell(self):
        print("Wine sold")
R = Wine()
R.sell()        