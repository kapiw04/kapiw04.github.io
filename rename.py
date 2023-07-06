import os

directory = "./images/food/"

i = 1

for filename in os.listdir(directory):
    if filename.endswith(".jpg"):
        os.rename(directory + filename, directory + "food_" + str(i) + ".jpg")
        i += 1
        continue
    else:
        continue