def hash_of_info()
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
end

p hash_of_info