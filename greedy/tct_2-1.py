# n 숫자 갯수
# m 연산 갯수
# k 중복으로 더할 수 있는 최대 수

n, m, k = map(int, input().split())
data = list(map(int, input().split()))

# def solution(n, m, k, data) :
#     s = 0;
#     count = 0;
#     number_count = 0;
#     data.sort();
#     max_num = data[n - 1];
#     next_num = data[n - 2];

#     while(count != m):
#         if(number_count == k):
#             s += next_num;
#             number_count = 0;
#             count += 1;
#         else :
#             s += max_num;
#             number_count += 1;
#             count += 1;
#     return s;

def solution(n, m, k, data):
    data.sort()
    max_num = data[n - 1]
    next_num = data[n - 2]

    iter_num = max_num * k + next_num
    count = int(m / (k + 1))
    remainder = m % (k + 1)
    
    result = 0
    result += iter_num * count
    result += max_num * remainder

    return result
    
print(solution(n, m, k, data));
        

        
        

