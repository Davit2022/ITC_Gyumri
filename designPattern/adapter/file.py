import json

class JSON:
    def writeinfile(self):
        with open("file.json", "w") as f:
            f.write()

    def readFile(self):
        with open("file.json", "r") as f:
            return json.load(f)

class XML:
    def writeinFile(self):
        with open("file.xml", "w") as f:
            f.write()

    def readFile(self):
        with open("file.xml", "r") as f:
            return f.read()   

class Adapter(JSON, XML):
    def request(self):
        return f"{self.readFile()}"

def client_code(jsn: "JSON"):
   print(jsn.readFile(), end="")

if __name__ == "__main__":
    jsn = JSON()
    client_code(jsn)
    print("\n")

    xml = XML()
    print(f"XML: {xml.readFile()}", end="\n\n")
   
    adapter = Adapter()
    client_code(adapter)
    print("\n")
        