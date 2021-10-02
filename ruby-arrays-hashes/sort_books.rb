exit_condition = true
result = []
while exit_condition
    puts "Please enter a book name or exit to quit"
    book_name = gets.chomp
    if book_name == "exit"
        puts result
        exit_condition = false
    else 
        result.push(book_name.capitalize)
        result = result.sort
    end
end

