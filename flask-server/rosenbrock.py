import numpy as np
someFunc = lambda w: np.dot(w.T, w) + 2
rosenbrock = lambda w: 100*(np.power((w[1] - (np.power(w[0], 2))), 2)) + np.power(w[0] - 1, 2)

max_range = 20

data = []

for x in range(max_range):
    data.append([])
    for y in range(max_range):
        data[x].append(str(rosenbrock(np.array([x-10, y-10]))))

print()
print()
print()
print()
print()
print()
print()
for d in data:
    print(data)
    print()