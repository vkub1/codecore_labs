class Book
    attr_accessor :type, :name
    def initialize(name, type)
        @name, @type = name, type
    end
end