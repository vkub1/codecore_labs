puts "Enter the first symbol to permute"
char1 = gets.chomp
puts "Enter the second symbol to permute"
char2 = gets.chomp
puts "Enter the third symbol to permute"
char3 = gets.chomp


arr = [char1, char2, char3]

arr = arr.permutation.to_a

for subarr in arr 
    for symbol in subarr
        print "#{symbol} "
    end
    puts ""
end




