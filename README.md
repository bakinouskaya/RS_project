# RS_project
This is  CLI tool that will encode and decode a text by 3 substitution ciphers:

Caesar cipher
Atbash cipher
ROT-8 as variation of ROT-13


To run the CLI call: stream.js with following options:


-c is a flag for for ciphers, where:

C1 is encoding with Caesar cipher
C0 is decoding with Caesar cipher

R1 is encoding with ROT-8 cipher
R0 is decoding with ROT-8 cipher

A is for Atbash cipher

Ciphers can be chained via '-'. 


-i path to input file
-o path to output file


Details:

Config validation is not implemented yet. So please don't expect exit w/o zero exit code and human friendly error. Please use arguments and their flags. Order is not important.

Example

node stream.js -c C0-C1-A -o output.txt -i test.txt