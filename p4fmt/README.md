# Qualification Task 2: p4 Formatter

## p4fmt
P4Fmt shows a sample compiler backend for the p4c compiler. For now it just
prints the AST after the parsing phase, no other passes(e.g. frontend, midend)
are applied. It is meant to demonstrate the working of the p4c's pretty-printer [toP4](https://github.com/p4lang/p4c/blob/main/frontends/p4/toP4/toP4.h).


## Build
- Setup P4C correctly, from [here](https://github.com/p4lang/p4c#dependencies)

- The sample formatter source code resides in `p4c/p4fmt` and *NOT* in the `p4c/extensions` dir as specified in the [p4dummy](https://github.com/fruffy/p4dummy). 

> It can be built as follows:

```
cd p4c/
git checkout -b feature origin/feature
mkdir build/
cd p4c/build
cmake ..
make
```
`p4fmt` executable is generated inside the `p4c/build/p4fmt/` folder, and can be invoked as `./build/p4fmt/p4fmt` from p4c's root dir.

## Usage
If an output file is not provided with `-o` flag, it just prints the generated AST on the stdout.

    `./build/p4fmt/p4fmt <p4 source file>` 

Takes an output file with a `-o` flag and writes to it.

    `./build/p4fmt/p4fmt <p4 source file> -o <output_file>`


Sample Usage:

    ./build/p4fmt/p4fmt sample.p4
    ./build/p4fmt/p4fmt sample.p4 -o sample_ast.txt

Sample Generated Files:

Some sample source files along with the generated ast after passing it through `p4fmt`,
can be found in the `p4fmt/tests` dir. I've also included a sample output after turning 
on the `showIR` flag, which dumps IR as comments, just for fun :)
