import {
  generateI18nKeyType,
  isPluralSuffix,
  pluralSuffixes,
  processDeepKey,
} from "./generate-i18n-key-file";

describe("i18n script", () => {
  describe("`generateI18nKeyType` function", () => {
    it("generates correct `I18nKey` type", () => {
      expect(
        generateI18nKeyType([
          "common:test1",
          "common:test2",
          "home:test3",
          "home:test4",
          "test:test5",
          "test:test6",
        ])
      ).toBe(
        'type I18nKey =\n  | "common:test1"\n  | "common:test2"\n  | "home:test3"\n  | "home:test4"\n  | "test:test5"\n  | "test:test6";\n\nexport default I18nKey;\n'
      );
    });
  });

  describe("`isSuffix` function", () => {
    pluralSuffixes.forEach((pluralSuffix) => {
      it(`recognizes \`${pluralSuffix}\` as a plural suffix`, () => {
        expect(isPluralSuffix(pluralSuffix)).toBeTruthy();
      });
    });

    it("recognizes negative numbers as a plural suffix", () => {
      expect(isPluralSuffix("-7")).toBeTruthy();
    });

    it("recognizes `0` as a plural suffix", () => {
      expect(isPluralSuffix("0")).toBeTruthy();
    });

    it("recognizes positive numbers as a plural suffix", () => {
      expect(isPluralSuffix("7")).toBeTruthy();
    });

    it("doesn't recognize `Infinity` as a plural suffix", () => {
      expect(isPluralSuffix("Infinity")).toBeFalsy();
    });

    it("doesn't recognize empty string as a plural suffix", () => {
      expect(isPluralSuffix("")).toBeFalsy();
    });

    it("doesn't recognize different words as a plural suffix", () => {
      expect(isPluralSuffix("Studentre")).toBeFalsy();
    });
  });

  describe("`processDeepKey` function", () => {
    it("handles two levels of nested keys", () => {
      expect(
        processDeepKey(`test.${pluralSuffixes[0]}.${pluralSuffixes[1]}`)
      ).toBe(`test.${pluralSuffixes[0]}`);
    });

    it("handles multiple levels of nested keys", () => {
      expect(
        processDeepKey(
          `test.${pluralSuffixes[0]}.${pluralSuffixes[1]}.${pluralSuffixes[2]}`
        )
      ).toBe(`test.${pluralSuffixes[0]}.${pluralSuffixes[1]}`);
    });

    it("handles multiple levels of nested keys with underscore suffix as a penultimate key", () => {
      expect(
        processDeepKey(
          `test.${pluralSuffixes[0]}.test_${pluralSuffixes[1]}.${pluralSuffixes[2]}`
        )
      ).toBe(`test.${pluralSuffixes[0]}.test_${pluralSuffixes[1]}`);
    });

    it("handles multiple levels of nested keys with underscore suffix at the end", () => {
      expect(
        processDeepKey(
          `test.${pluralSuffixes[0]}.${pluralSuffixes[1]}.test_${pluralSuffixes[2]}`
        )
      ).toBe(`test.${pluralSuffixes[0]}.${pluralSuffixes[1]}.test`);
    });

    it("processes nested suffixes", () => {
      expect(processDeepKey(`test.${pluralSuffixes[0]}`)).toBe("test");
    });

    it("processes underscore suffixes", () => {
      expect(processDeepKey(`test_${pluralSuffixes[0]}`)).toBe("test");
    });

    it("prefers nested suffixes over underscore suffixes", () => {
      expect(
        processDeepKey(`test_${pluralSuffixes[0]}.${pluralSuffixes[1]}`)
      ).toBe(`test_${pluralSuffixes[0]}`);
    });
  });
});
