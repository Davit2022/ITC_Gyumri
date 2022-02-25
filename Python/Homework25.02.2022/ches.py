from sys import stdin
import sys


def minSteps(kx, ky, tx, ty, size):
    pass


def takeInput():
    size = int(input())

    kx, ky = list(map(int, input().strip().split(" ")))
    tx, ty = list(map(int, input().strip().split(" ")))

    return size, kx, ky, tx, ty


t = int(input())

while t:
    size, kx, ky, tx, ty = takeInput()
    print(minSteps(kx, ky, tx, ty, size))
    t = t-1
