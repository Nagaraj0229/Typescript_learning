// type Example1 = Promise<string>
// type Example2 = Promise<{ field: number }>
// type Example3 = Promise<Promise<string | number>>


// type Result1 = MyAwaited<Example1> // string
// type Result2 = MyAwaited<Example2> // { field: number }
// type Result3 = MyAwaited<Example3> // string | number
