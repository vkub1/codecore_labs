def reduce(arr, start)
    for value in arr
        start = yield(start, value)
    end
    start
end

p reduce([1, 2, 3, 4, 5, 6], 0) { |total, v| total + v } # => 21