test_arr = []
for i in 1..100
    test_arr.push(i)
end
pnrg = Random.new

random_ind = pnrg.rand(1..100)
random_num = pnrg.rand(1..100)



test_arr[random_ind] = random_num;

hashMap = {}

# for i in 0...test_arr.length
#     if hashMap.key? test_arr[i]
#         p test_arr[i]
#         break
#     else 
#         hashMap[test_arr[i]] = 1
#     end
# end

arr = []

for i in 0...test_arr.length
    if arr.include? test_arr[i]
        p test_arr[i]
        break
    else
        arr.push(test_arr[i])
    end
end

