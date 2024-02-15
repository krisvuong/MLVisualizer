from src.grad_descent import gradient_descent
from src.functions import dot_product
import numpy as np

def dot_product_handler(alpha, max_its):

    w0 = np.array([1., 1.])

    w_h, c_h = gradient_descent(dot_product, alpha, max_its, w0)

    w_h = [wi.tolist() for wi in w_h]
    c_h = [ci.tolist() for ci in c_h]
    
    return {"w_history": w_h, "c_history": c_h}
