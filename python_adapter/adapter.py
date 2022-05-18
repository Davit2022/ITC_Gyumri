import json

class JSON:
    def writFile(self):
        with open("adapter.json", "w") as f:
            f.write()

    def readFile(self):
        with open("adapter.json", "r") as f:
            return json.load(f)


class XML:
    def writFile(self):
        with open("adapter.xml", "w") as f:
            f.write()

    def readFile(self):
        with open("adapter.xml", "r") as f:
            return f.read()   


class Adapter(JSON, XML):
    def request(self):
        return f"Adapter: (TRANSLATED) {self.readFile()[::-1]}"


def client_code(target: "JSON"):
   print(target.readFile(), end="")


if __name__ == "__main__":
    target = JSON()
    client_code(target)
    print("\n")

    xml = XML()
    print(f"XML: {xml.readFile()}", end="\n\n")
   
    adapter = Adapter()
    client_code(adapter)
    print("\n")




