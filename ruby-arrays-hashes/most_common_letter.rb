def most_common_letter(str)
    hashMap = {}
    for i in 0...str.length
        if str[i] != " "
            if hashMap.key? str[i] 
                hashMap[str[i]] += 1
            else 
                hashMap[str[i]] = 1
            end
        end
    end
    hashMap.max_by{|key, value| value}[0]
end

p most_common_letter("aaaabbc") # => "a"
p most_common_letter("T a d c g d g d d n") # => "d"
p most_common_letter("1111 monkeys on the wall") # => "1"
    