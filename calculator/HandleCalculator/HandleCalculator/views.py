from django.http import HttpResponse
from django.http import JsonResponse
import json
from collections import deque

def calculate(request):
    if request.method == 'POST':
        body = json.load(request)
        print(body)

        def calcu(s):
            def backtrack(s):
                stk = []
                pre_op = "+"
                num = 0

                while len(s) > 0:
                    c = s.popleft()
                    if c.isdigit():
                        num = num*10 + int(c)
                    if c == "(":
                        num = backtrack(s)
                    if (not c.isdigit() and c != " " ) or len(s) == 0:
                        if pre_op == "+":
                            stk.append(num)
                        elif pre_op == "-":
                            stk.append(-num)
                        elif pre_op == "*":
                            oper = stk.pop()
                            stk.append(oper*num)
                        elif pre_op == "/":
                            oper = stk.pop()
                            stk.append(int(oper/num))
                        num = 0
                        pre_op = c
                    if c == ")":
                         break
                return sum(stk)
            return backtrack(deque(s))

        response_data = {}
        response_data['result'] = calcu(body)
        return JsonResponse(response_data)
    print("finish")
