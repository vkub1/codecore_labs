puts "Enter a word"
input = gets.chomp

if (input.include? 'C') || (input.include? 'c')
    puts "Yes it has C"
else 
    puts "It has no C"
end




# flag = true
# for i in 0...input.length
#     if (input[i] == 'c' || input[i] == 'C')
#         puts "Yes it has #{input[i]}"
#         flag = false
#         break
#     end
# end
# if flag
#     puts "It has no C"
# end
