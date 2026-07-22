import os
import requests

carpeta = "img/gen1"

os.makedirs(carpeta, exist_ok=True)

for i in range(1,152):

    numero = str(i).zfill(3)

    url = f"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{i}.png"

    archivo = f"{carpeta}/{numero}.png"

    print("Descargando Pokémon:", numero)

    respuesta = requests.get(url)

    if respuesta.status_code == 200:
        with open(archivo,"wb") as img:
            img.write(respuesta.content)

print("✅ GEN 1 COMPLETA")
