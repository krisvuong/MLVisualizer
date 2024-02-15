from src.handlers.dot_product_handler import dot_product_handler

def func_handler(func, alpha, max_its):
    match func:
        case 'dotProduct': return dot_product_handler(alpha, max_its)
        case 'rosenbrock': return None
        # TODO: add more functions