str = "abcd"
result = []
for i in 0...str.length
    result.push(str[i] + str[i+1]) if (str[i+1])
end

puts result