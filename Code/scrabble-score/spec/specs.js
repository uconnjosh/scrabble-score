describe('scrabbleScore', function() {
  it("should take an string and calculate the scrabble score for that string", function() {
    scrabbleScore("cat").should.equal(5);
  });
  it("should return a value of 1 for the letter a", function() {
    scrabbleScore("a").should.equal(1);
  });
  it("should return a value of 5 for dog", function() {
    scrabbleScore("dog").should.equal(5);
  });
});
