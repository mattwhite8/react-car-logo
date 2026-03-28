import * as allLogos from "../src/allLogos";
import { SIZE_MAP, CDN_WIDTH_MAP } from "../src/types";

describe("All brand exports", () => {
  const entries = Object.entries(allLogos);

  it("has exactly 40 brands", () => {
    expect(entries.length).toBe(40);
  });

  entries.forEach(([name, Component]) => {
    describe(name, () => {
      it("is a function (React component)", () => {
        expect(typeof Component).toBe("function");
      });
    });
  });
});

describe("SIZE_MAP", () => {
  it("has sm, md, lg keys", () => {
    expect(Object.keys(SIZE_MAP)).toEqual(["sm", "md", "lg"]);
  });

  it("sm < md < lg", () => {
    expect(SIZE_MAP.sm).toBeLessThan(SIZE_MAP.md);
    expect(SIZE_MAP.md).toBeLessThan(SIZE_MAP.lg);
  });
});

describe("CDN_WIDTH_MAP", () => {
  it("has sm, md, lg keys", () => {
    expect(Object.keys(CDN_WIDTH_MAP)).toEqual(["sm", "md", "lg"]);
  });

  it("all sizes fetch 640px", () => {
    expect(CDN_WIDTH_MAP.sm).toBe(640);
    expect(CDN_WIDTH_MAP.md).toBe(640);
    expect(CDN_WIDTH_MAP.lg).toBe(640);
  });
});
