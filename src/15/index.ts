import { Expect, Equal } from "type-testing";

// SOLUTION

type _BoxToys<
  Toy extends string,
  Boxes extends number,
  Toys extends string[] = []
> = Toys["length"] extends Boxes ? Toys : _BoxToys<Toy, Boxes, [Toy, ...Toys]>;

type BoxToys<Toy extends string, Boxes extends number> = Boxes extends number
  ? _BoxToys<Toy, Boxes>
  : never;

// TESTS

type test_doll_actual = BoxToys<"doll", 1>;
type test_doll_expected = ["doll"];
type test_doll = Expect<Equal<test_doll_expected, test_doll_actual>>;

type test_nutcracker_actual = BoxToys<"nutcracker", 3 | 4>;
type test_nutcracker_expected =
  | ["nutcracker", "nutcracker", "nutcracker"]
  | ["nutcracker", "nutcracker", "nutcracker", "nutcracker"];
type test_nutcracker = Expect<
  Equal<test_nutcracker_expected, test_nutcracker_actual>
>;
