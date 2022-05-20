from __future__ import annotations
from abc import ABC, abstractmethod
from random import randrange
from tkinter import S
from typing import List


class Store(ABC):
    @abstractmethod
    def attach(self, observer: Observer):
        print("Hi I subscribe yor store",observer.update())
        pass

    @abstractmethod
    def detach(self, observer: Observer):
        print("Hi I unsubscribe your store", observer)
        pass

    @abstractmethod
    def notify(self):
        print("Hi send your notify",self.attach())
        pass

class ConcreteSubject(Store):
    _state: int = 10
    
    _observers: List[Observer] = []

    def attach(self, observer: Observer):
        print("Subject: Attached an observer.")
        self._observers.append(observer)

    def detach(self, observer: Observer) -> None:
        self._observers.remove(observer)

    def notify(self):
        print("Subject: Notifying observers...")
        for observer in self._observers:
            observer.update(self)

    def some_business_logic(self):
        print("\nSubject: I'm doing something important.")
        self._state = randrange(0, 10)

        print(f"Subject: My state has just changed to: {self._state}")
        self.notify()    


class Observer(ABC):
    @abstractmethod
    def update(self, subject: Store):
        print("Update", subject._state)
        

class ConcreteObserverA(Observer):
    def update(self, subject: Store):
        if subject._state < 3:
            print("ConcreteObserverA: Reacted to the event")


class ConcreteObserverB(Observer):
    def update(self, subject: Store):
        if subject._state == 0 or subject._state >= 2:
            print("ConcreteObserverB: Reacted to the event")


if __name__ == "__main__":
    # The client code.

    subject = ConcreteSubject()

    observer_a = ConcreteObserverA()
    subject.attach(observer_a)

    observer_b = ConcreteObserverB()
    subject.attach(observer_b)

    subject.some_business_logic()
    subject.some_business_logic()

    subject.detach(observer_a)

    subject.some_business_logic()



