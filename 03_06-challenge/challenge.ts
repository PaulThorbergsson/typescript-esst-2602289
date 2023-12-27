export function Challenge() {
  type MyType = String | boolean | Array<String | number>;
  let foo: MyType = "Hello!";
  foo = false;
  foo = ["test", 100];
}
