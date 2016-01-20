describe("originalString", function(){
  it("determine if all punctuation, numbers and spaces are removed", function(){
    expect(originalString("Hi! Erik.")).to.equal("hierik");
  });
});

describe("mathString", function(){
  it("take the square root of the length of the string", function(){
    expect(mathString("abcdefghij")).to.equal(3);
  });
});
