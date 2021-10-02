module HelperMethods
    def random_number(max)
        prng = Random.new()
        rand = prng.rand(101)
        rand
    end
end