import numpy as np

def dot_product(w):
    return np.dot(w.T, w) + 2


data = []
for x in range(15):
    data.append([])
    for y in range(15):
        data[-1].append(str(dot_product(np.array([x, y]))))


print()
print()
print()
print()
print()
print(len(data))
print(len(data[1]))