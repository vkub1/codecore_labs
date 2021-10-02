puts "Enter a number for all primes between 1 and that number:"
max = gets.chomp.to_i

array_of_bools = Array.new(max, true)
value = 0
for number in 2..max ** (0.5)
    if array_of_bools[number]
        value = number ** 2
        counter = 0
        while (value + counter * number  < max)
            array_of_bools[value + counter * number] = false;
            counter+=1;
        end
    end
end

count = 2
for bool in array_of_bools
    if bool
        puts count
    end
    count+=1
end


