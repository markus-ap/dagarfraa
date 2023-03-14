import json, os, shutil
from jinja2 import Environment as Miljø
from jinja2 import FileSystemLoader as Filinnlastar

def sidar():
    return json.loads(open(f"automatisk/sidar.json", "r", encoding="utf8").read())

def bygg():
    miljø = Miljø(loader=Filinnlastar("automatisk/malar"))
    mal = miljø.get_template("hovud_mal.html")

    shutil.rmtree("generert")
    os.mkdir("generert")
    os.mkdir("generert/til")
    for side in sidar():
        html = mal.render(side)
        mappe = os.getcwd()
        os.mkdir(f"generert/til/{side['filnamn']}")
        open(f"{mappe}/generert/til/{side['filnamn']}/index.html", "w", encoding="utf8").write(html)

if __name__ == "__main__":
    bygg()