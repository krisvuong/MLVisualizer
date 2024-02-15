from src.grad_descent import gradient_descent
from src.functions import dot_product
import numpy as np

def dot_product_handler(alpha, max_its):

    w0 = np.array([1., 1.])

    w_h, c_h = gradient_descent(dot_product, 1., max_its, w0)

    # print("ALPHAAA:", alpha)
    # print("MAX_ITS:", max_its)

    # return [[1,3], [2,2]]
    return w_h
