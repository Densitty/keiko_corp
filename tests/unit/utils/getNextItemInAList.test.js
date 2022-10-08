import getNextItemInAList from "@/utils/getNextItemInAList";

describe("getNextItemInAList", () => {
  it("finds next item in a list and returns it", () => {
    const list = ["A", "B", "C", "D"];
    const value = "C";
    const res = getNextItemInAList(list, value);
    expect(res).toBe("D");
  });

  describe("when the item is the last item on the list", () => {
    it("returns the first item in the list", () => {
      const list = ["A", "B", "C", "D"];
      const value = "D";
      const res = getNextItemInAList(list, value);
      expect(res).toBe("A");
    });
  });
});
