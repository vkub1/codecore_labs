require "./book.rb"
class StorageMedium
    def initialize(media_type)
        @media_type = media_type
        @stored_books = []
    end

    def insert(book)
        if book.type == @media_type
            @stored_books.push(book)
            @stored_books = @stored_books.sort_by!{|book| book.name}
        else
            puts "Cant insert this book wrong type!"
        end
    end
end

s = StorageMedium.new("Online")
b = Book.new("ABC", "Online")
c = Book.new("BCD", "Online")
d = Book.new("BAD", "Online")
e = Book.new("AAA", "Online")

s.insert(b)
s.insert(c)
s.insert(d)
s.insert(e)
