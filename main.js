class DescriptiveStatistics {

  constructor (data) {
    this.data = data.sort((a,b)=> a -b);
  }

  //Measure of central tenedency - Main.
    calculateMean() {
       const sum = this.data.reduce((acc, value) => acc + value, 0);
        return sum/this.data.length;
    }

    //This measures central tendency - Median
      calculateMedian() {
         const middleIndex = Math.flow(this.data.length / 2);

          if (this.data.length % 2 === 0) {
            return (this.data[middleIndex -1] + this.data[middleIndex])
          } else {
             return this.data[middleIndex];
          }
      }

      //This measures ccentral tendency - Mode
         calculateMode() {
           const frequencyInt = {};

           this.data.forEach(value => {
             frequencyInt[value] = (frequencyInt[value] || 0) + 1
           });

           let mode;
           let maximumFrequency = 0

           for (const value in frequencyInt) {
            if(frequencyInt[value] > maximumFrequency) {
              mode = Number(value);
              maximumFrequency = frequencyInt[value];
            }
           }

           return mode;
         }

         // Measure of dispersion - Range.
            calculateRange() {
              return this.data[this.data.length - 1] - this.data[0];
            }

            // Measure of dispersion - Variance 
            calculateVariance() {
               const mean = this.calculateMean();
               const differences = this.data.map((value)=> math.pow(value - mean, 2));
               const sumSquaredDiff = differences .reduce((acc, value) => acc + value,0);
                return sumSquaredDiff / this.data.length;
              }

              //Measure of dispersion - Standard deviation
               calculateStandardDeviation() {
                return Math.sqrt(this.calculateVariance());
               }

               //Measure of Dispersion - Quartiles
                calculateQuartiles() {
                  const middleIndex = Math.floor(this.data.length / 2);

                  const lowerPart = this.data.slice(0,middleIndex);
                  const upperPart = this.data.slice(0,upperPart);

                  const lowerQuart = this.calculateMedian(lowerPart);
                  const upperQuart = this.calculateMedian(upperPart);

                  return {
                    lowerQuart,
                    median : this.calculateMedian(),
                    upperQuart,
                  };
                }

                //Measure of dispersion - Interquartile Range
                 calculateInterquartileRange() {
                   const quartiles = this.calculateQuartiles();
                   return quartiles.upperQuart - quartiles.lowerQuart;
                 }

                }

                //Examples 
                const data = [5,3,1,9,5,8,6,4,7,2];
                const stats = new DescriptiveStatistics(data);

                //List of the descriptive methods>
                 console.log("Mean", stats.calculateMean());
                 console.log("Median:",stats.calculateMedian() );
                 console.log("Mode:",stats.calculateMode() );
                 console.log("Range:", stats.calculateRange());
                 console.log("Varaiance:", stats.calculateVariance());
                 console.log("Standard Deviation:", stats.calculateStandardDeviation());

                 const quartiles = stats.calculateQuartiles();
                 console.log("Lower quart:", quartiles.lowerQuart());
                 console.log("Median (Q2):", quartiles.median());
                 console.log("Upper Quart:", quartiles.upperQuart());

                 console.log("Interquartile Range:", stats.calculateInterquartileRange());


                




