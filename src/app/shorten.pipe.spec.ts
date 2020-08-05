import { ShortenPipe } from "./shorten.pipe";

describe("Pipe: Reverse", () => {
  it("should shorten a string to 50 characters", () => {
    let shortenPipe = new ShortenPipe();
    expect(
      shortenPipe.transform(
        "What a beautiful day! It’s very sunny and warm today!"
      )
    ).toEqual("What a beautiful day! It’s very sunny and warm tod ...");
  });
});
