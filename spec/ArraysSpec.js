describe("Arrays", function() {
   var TEST_ARRAY_NO_DUPES = [-10, -5, 0, 1, 5, 10];
   var TEST_ARRAY_WITH_DUPES = [0, 1, 3, 3, 3, 3, 5, 7, 9];
   var Arrays = org.cmucreatelab.util.Arrays;

   describe("when the array is undefined", function() {
      it("binarySearch should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearch();
         }).toThrow();
      });
      it("binarySearchFindFirst should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindFirst();
         }).toThrow();
      });
      it("binarySearchFindLast should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindLast();
         }).toThrow();
      });
   });

   describe("when the array is null", function() {
      it("binarySearch should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearch(null);
         }).toThrow();
      });
      it("binarySearchFindFirst should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindFirst(null);
         }).toThrow();
      });
      it("binarySearchFindLast should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindLast(null);
         }).toThrow();
      });
   });

   describe("when the array is an object but not an array", function() {
      it("binarySearch should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearch({});
         }).toThrow();
      });
      it("binarySearchFindFirst should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindFirst({});
         }).toThrow();
      });
      it("binarySearchFindLast should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindLast({});
         }).toThrow();
      });
   });

   describe("when the array is a TypedArray", function() {
      it("binarySearch should not throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearch(new Int8Array(1), 42, Arrays.NUMERIC_COMPARATOR);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearch(new Uint8Array(1), 42, Arrays.NUMERIC_COMPARATOR);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearch(new Int16Array(1), 42, Arrays.NUMERIC_COMPARATOR);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearch(new Uint16Array(1), 42, Arrays.NUMERIC_COMPARATOR);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearch(new Int32Array(1), 42, Arrays.NUMERIC_COMPARATOR);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearch(new Float32Array(1), 42, Arrays.NUMERIC_COMPARATOR);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearch(new Float64Array(1), 42, Arrays.NUMERIC_COMPARATOR);
         }).not.toThrow();
      });
      it("binarySearchFindFirst should not throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindFirst(new Int8Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindFirst(new Uint8Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindFirst(new Int16Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindFirst(new Uint16Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindFirst(new Int32Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindFirst(new Float32Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindFirst(new Float64Array(1), 42);
         }).not.toThrow();
      });
      it("binarySearchFindLast should not throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindLast(new Int8Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindLast(new Uint8Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindLast(new Int16Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindLast(new Uint16Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindLast(new Int32Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindLast(new Float32Array(1), 42);
         }).not.toThrow();
         expect(function() {
            Arrays.binarySearchFindLast(new Float64Array(1), 42);
         }).not.toThrow();
      });
   });

   describe("when the needle is undefined", function() {
      it("binarySearch should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearch([]);
         }).toThrow();
      });
      it("binarySearchFindFirst should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindFirst([]);
         }).toThrow();
      });
      it("binarySearchFindLast should throw a TypeError", function() {
         expect(function() {
            Arrays.binarySearchFindLast([]);
         }).toThrow();
      });
   });

   describe("when the comparator is...", function() {
      describe("undefined", function() {
         it("binarySearch should throw a TypeError", function() {
            expect(function() {
               Arrays.binarySearch([], 42);
            }).toThrow();
         });
      });
      describe("null", function() {
         it("binarySearch should throw a TypeError", function() {
            expect(function() {
               Arrays.binarySearch([], 42, null);
            }).toThrow();
         });
      });
      describe("a primitive", function() {
         it("binarySearch should throw a TypeError", function() {
            expect(function() {
               Arrays.binarySearch([], 42, 343);
            }).toThrow();
         });
      });
      describe("an object", function() {
         it("binarySearch should throw a TypeError", function() {
            expect(function() {
               Arrays.binarySearch([], 42, {});
            }).toThrow();
         });
      });
   });

   describe("when the array is empty", function() {
      var needle = 42;
      it("binarySearch should return -1", function() {
         expect(Arrays.binarySearch([], needle, Arrays.NUMERIC_COMPARATOR)).toBe(-1);
      });
      it("binarySearchFindFirst should return -1", function() {
         expect(Arrays.binarySearchFindFirst([], needle)).toBe(-1);
      });
      it("binarySearchFindLast should return -1", function() {
         expect(Arrays.binarySearchFindLast([], needle)).toBe(-1);
      });
   });

   describe("when the array has no dupes", function() {
      describe("and the needle exists", function() {
         it("binarySearch should find the correct index", function() {
            for (var i = 0; i < TEST_ARRAY_NO_DUPES.length; i++) {
               var valueToFind = TEST_ARRAY_NO_DUPES[i];
               expect(Arrays.binarySearch(TEST_ARRAY_NO_DUPES, valueToFind, Arrays.NUMERIC_COMPARATOR)).toBe(i);
            }
         });
         it("binarySearchFindFirst should find the correct index", function() {
            for (var i = 0; i < TEST_ARRAY_NO_DUPES.length; i++) {
               var valueToFind = TEST_ARRAY_NO_DUPES[i];
               expect(Arrays.binarySearchFindFirst(TEST_ARRAY_NO_DUPES, valueToFind)).toBe(i);
            }
         });
         it("binarySearchFindLast should find the correct index", function() {
            for (var i = 0; i < TEST_ARRAY_NO_DUPES.length; i++) {
               var valueToFind = TEST_ARRAY_NO_DUPES[i];
               expect(Arrays.binarySearchFindLast(TEST_ARRAY_NO_DUPES, valueToFind)).toBe(i);
            }
         });
      });
      describe("and the needle does not exist", function() {
         describe("and the needle is less than the value in the first element", function() {
            var needle = -20;
            var expected = -1;
            it("binarySearch should return " + expected, function() {
               expect(Arrays.binarySearch(TEST_ARRAY_NO_DUPES, needle, Arrays.NUMERIC_COMPARATOR)).toBe(expected);
            });
            it("binarySearchFindFirst should return " + expected, function() {
               expect(Arrays.binarySearchFindFirst(TEST_ARRAY_NO_DUPES, needle)).toBe(expected);
            });
            it("binarySearchFindLast should return " + expected, function() {
               expect(Arrays.binarySearchFindLast(TEST_ARRAY_NO_DUPES, needle)).toBe(expected);
            });
         });
         describe("and the needle is greater than the value in the last element", function() {
            var needle = 42;
            it("binarySearch should return the complement of the length of the array", function() {
               expect(Arrays.binarySearch(TEST_ARRAY_NO_DUPES, needle, Arrays.NUMERIC_COMPARATOR)).toBe(~(TEST_ARRAY_NO_DUPES.length));
            });
            it("binarySearchFindFirst should return the complement of the length of the array", function() {
               expect(Arrays.binarySearchFindFirst(TEST_ARRAY_NO_DUPES, needle)).toBe(~(TEST_ARRAY_NO_DUPES.length));
            });
            it("binarySearchFindLast should return the complement of the length of the array", function() {
               expect(Arrays.binarySearchFindLast(TEST_ARRAY_NO_DUPES, needle)).toBe(~(TEST_ARRAY_NO_DUPES.length));
            });
         });
         describe("and the needle is between the values in the first and second elements", function() {
            var needle = -7;
            var expected = -2;
            it("binarySearch should return " + expected, function() {
               expect(Arrays.binarySearch(TEST_ARRAY_NO_DUPES, needle, Arrays.NUMERIC_COMPARATOR)).toBe(expected);
            });
            it("binarySearchFindFirst should return " + expected, function() {
               expect(Arrays.binarySearchFindFirst(TEST_ARRAY_NO_DUPES, needle)).toBe(expected);
            });
            it("binarySearchFindLast should return " + expected, function() {
               expect(Arrays.binarySearchFindLast(TEST_ARRAY_NO_DUPES, needle)).toBe(expected);
            });
         });
      });
   });

   describe("when the array has dupes", function() {
      describe("and the needle exists", function() {
         it("binarySearch should return the index of the first match it finds", function() {
            expect(Arrays.binarySearch(TEST_ARRAY_WITH_DUPES, 3, Arrays.NUMERIC_COMPARATOR)).toBe(4);
         });
         it("binarySearchFindFirst should return the index of the first occurrence of the value", function() {
            expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, 0)).toBe(0);
            expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, 1)).toBe(1);
            expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, 3)).toBe(2);
            expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, 5)).toBe(6);
            expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, 7)).toBe(7);
            expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, 9)).toBe(8);
         });
         it("binarySearchFindLast should return the index of the last occurrence of the value", function() {
            expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, 0)).toBe(0);
            expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, 1)).toBe(1);
            expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, 3)).toBe(5);
            expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, 5)).toBe(6);
            expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, 7)).toBe(7);
            expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, 9)).toBe(8);
         });
      });

      describe("and the needle does not exist", function() {
         describe("and the needle is less than the value in the first element", function() {
            var needle = -20;
            var expected = -1;
            it("binarySearch should return " + expected, function() {
               expect(Arrays.binarySearch(TEST_ARRAY_WITH_DUPES, needle, Arrays.NUMERIC_COMPARATOR)).toBe(expected);
            });
            it("binarySearchFindFirst should return " + expected, function() {
               expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, needle)).toBe(expected);
            });
            it("binarySearchFindLast should return " + expected, function() {
               expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, needle)).toBe(expected);
            });
         });
         describe("and the needle is greater than the value in the last element", function() {
            var needle = 42;
            it("binarySearch should return the complement of the length of the array", function() {
               expect(Arrays.binarySearch(TEST_ARRAY_WITH_DUPES, needle, Arrays.NUMERIC_COMPARATOR)).toBe(~(TEST_ARRAY_WITH_DUPES.length));
            });
            it("binarySearchFindFirst should return the complement of the length of the array", function() {
               expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, needle)).toBe(~(TEST_ARRAY_WITH_DUPES.length));
            });
            it("binarySearchFindLast should return the complement of the length of the array", function() {
               expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, needle)).toBe(~(TEST_ARRAY_WITH_DUPES.length));
            });
         });

         describe("and the needle is between the values in the second and third elements", function() {
            var needle = 2;
            var expected = -3;
            it("binarySearch should return " + expected, function() {
               expect(Arrays.binarySearch(TEST_ARRAY_WITH_DUPES, needle, Arrays.NUMERIC_COMPARATOR)).toBe(expected);
            });
            it("binarySearchFindFirst should return " + expected, function() {
               expect(Arrays.binarySearchFindFirst(TEST_ARRAY_WITH_DUPES, needle)).toBe(expected);
            });
            it("binarySearchFindLast should return " + expected, function() {
               expect(Arrays.binarySearchFindLast(TEST_ARRAY_WITH_DUPES, needle)).toBe(expected);
            });
         });
      });

   });
});