from heapq import heappush, heappop


def runningMedian(list):
    min_heap, max_heap, result = [], [], []

    def add(number, min_heap, max_heap):
        if not max_heap or number < -max_heap[0]:
            heappush(max_heap, -number)
        else:
            heappush(min_heap, number)

    def balance(min_heap, max_heap):
        if len(min_heap) - len(max_heap) >= 2:
            heappush(max_heap, -heappop(min_heap))
        elif len(max_heap) - len(min_heap) >= 2:
            heappush(min_heap, -heappop(max_heap))

    def get_median(min_heap, max_heap):
        if len(min_heap) == len(max_heap):
            return -max_heap[0] / 2.0 + min_heap[0] / 2.0
        elif len(min_heap) > len(max_heap):
            return float(min_heap[0])
        else:
            return -float(max_heap[0])

    for number in list:
        add(number, min_heap, max_heap)
        balance(min_heap, max_heap)
        result.append(get_median(min_heap, max_heap))

    return result
