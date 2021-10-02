def map_over_hash(hashMap)
    result = []
    for key in hashMap.keys
        result.push(yield(key, hashMap[key]) if block_given?)
    end
    result
end

p map_over_hash({ name: "Cersei", profession: "Queen", mood: "bitter" }) do |key, value|
    "Her #{key.to_s} is #{value}"
end
  # => ["Her name is Cersei", "Her profession is Queen", "Her mood is bitter"]