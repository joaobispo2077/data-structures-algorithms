def isBalanced(text):
    stack = []
    brackets = {'{': '}', '[': ']', '(': ')'}

    for char in text:
        if char in ["{", "[", "("]:
            stack.append(char)
        else:
            if len(stack) > 0:
                topStack = stack.pop()
                if brackets[topStack] != char:
                    return "NO"
            else:
                return "NO"
    return "NO" if stack else "YES"
