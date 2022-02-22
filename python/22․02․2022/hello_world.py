import click
import time
def print_hello():
    print("   Hello World!")
print("Loading <<Hello World!>> printing function")
for loading in range(1):
    with click.progressbar(range(100), fill_char='=', empty_char=' ') as bar:
        for a in bar:
            time.sleep(0.01)

print_hello()