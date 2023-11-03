var bottlesOfBeer = 99;

while (bottlesOfBeer >= 0) {
  var wordBottle = "bottles";

  if (bottlesOfBeer === 1) {
    wordBottle = "bottle";
  }

  console.log(bottlesOfBeer + " " + wordBottle + " of beer on the wall,");
  console.log(bottlesOfBeer + " " + wordBottle + " of beer.");
  console.log("Take one down and pass it around,");

  bottlesOfBeer--;

  if (bottlesOfBeer === 1) {
    wordBottle = "bottle";
  } else if (bottlesOfBeer === 0) {
    console.log("No more bottles of beer on the wall,");
    console.log("No more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    break; // Exit the loop
  }

  console.log(bottlesOfBeer + " " + wordBottle + " of beer on the wall.");
}
