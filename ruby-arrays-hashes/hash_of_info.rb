puts "What is your first name?"
first_name = gets.chomp.capitalize

puts "What is your last name?"
last_name = gets.chomp.capitalize

puts "What is your city of birth?"
city_of_birth = gets.chomp.capitalize

puts "What is your age?"
age = gets.chomp.to_i

person = {
    "first name" => first_name,
    "last name" => last_name,
    "city of birth" => city_of_birth,
    "age" => age
}

person.each {|key,value| puts "Your #{key} is #{value}"}