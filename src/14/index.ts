import { Expect, Equal } from "type-testing";

// SOLUTION

type DecipherNaughtyList<
  T extends string,
  U extends string[] = []
> = T extends `${infer A}/${infer B}`
  ? DecipherNaughtyList<B, [...U, A]>
  : T extends `${infer A}`
  ? A extends ""
    ? U[number]
    : DecipherNaughtyList<"", [...U, A]>
  : never;

// TESTS

type test_0_actual = DecipherNaughtyList<"timmy/jimmy">;
type test_0_expected = "jimmy" | "timmy";
type test_0 = Expect<Equal<test_0_expected, test_0_actual>>;

type test_1_actual = DecipherNaughtyList<"elliot">;
type test_1_expected = "elliot";
type test_1 = Expect<Equal<test_1_expected, test_1_actual>>;

type test_2_actual = DecipherNaughtyList<"melkey/prime/theo/trash">;
type test_2_expected = "melkey" | "prime" | "theo" | "trash";
type test_2 = Expect<Equal<test_2_expected, test_2_actual>>;
