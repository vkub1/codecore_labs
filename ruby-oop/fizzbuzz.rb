class FizzBuzz
    attr_accessor :first_number, :second_number
    def initialize(first_number, second_number)
        @first_number, @second_number = first_number, second_number
    end

    def run()
        @fizz_arr = [];
        for i in 1..100
            if (i % @first_number == 0 && i % @second_number == 0)
                @fizz_arr.push("fizzbuzz")
            elsif (i % @first_number == 0)
                @fizz_arr.push("fizz")
            elsif (i % @second_number == 0)
                @fizz_arr.push("buzz")
            else
                @fizz_arr.push(i)
            end
        end
        @fizz_arr
    end
end


fb = FizzBuzz.new(3,5)
p fb.run # returns an array like: [1, 2, 'fizz', 4, 'buzz, ...
fb.first_number = 2
fb.second_number = 3
puts ""
p fb.run # returns an array: [1, 'fizz', 'buzz', 'fizz', 5, 'fizzbuzz'...
