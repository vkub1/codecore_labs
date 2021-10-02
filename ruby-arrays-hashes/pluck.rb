def pluck(arr_of_hash, key)
    result = []
    for hash in arr_of_hash
        result.push(hash[key])
    end
    result
end

p pluck([{a:1}, {a:2}], :a) ## returns [1,2]
p pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a) ## returns [nil, 4, 1, nil]
p pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b) ## returns [2,4,nil,nil]