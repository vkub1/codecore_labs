correct_guesses = 0
puts "What database operation is PATCH method mainly used for?"
puts "1: INSERT"
puts "2: SELECT"
puts "3: UPDATE"
puts "4: DELETE"
puts "Enter the correct number"
response1 = gets.chomp.to_i
puts "What database operation is GET method mainly used for?"
puts "1: INSERT"
puts "2: SELECT"
puts "3: UPDATE"
puts "4: DELETE"
puts "Enter the correct number"
response2 = gets.chomp.to_i
puts "What database operation is DELETE method mainly used for?"
puts "1: INSERT"
puts "2: SELECT"
puts "3: UPDATE"
puts "4: DELETE"
puts "Enter the correct number"
response3 = gets.chomp.to_i

if response1 == 3
    correct_guesses += 1
end

if response2 == 2
    correct_guesses += 1
end

if response3 == 4
    correct_guesses += 1
end

puts "You scorred #{(correct_guesses.to_f/3 * 100).round(2)}%, you got #{correct_guesses} out of 3 questions correct"

