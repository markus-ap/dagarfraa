import json, os, shutil
from jinja2 import Environment as Miljø
from jinja2 import FileSystemLoader as Filinnlastar

def sidar():
    return json.loads(open(f"automatisk/sidar.json", "r", encoding="utf8").read())

def bygg():
    miljø = Miljø(loader=Filinnlastar("automatisk/malar"))
    mal = miljø.get_template("hovud_mal.html")

    if os.path.isdir("generert"):
        shutil.rmtree("generert")
    
    for side in sidar():
        html = mal.render(hending=side)
        mappe = os.getcwd()

        filnamn_unicode = side["filnamn"].encode("utf-8").decode("utf-8")

        os.makedirs(f"generert/til/{filnamn_unicode}", exist_ok=True)
        open(f"{mappe}/generert/til/{filnamn_unicode}/index.html", "w", encoding="utf8").write(html)

if __name__ == "__main__":
    bygg()