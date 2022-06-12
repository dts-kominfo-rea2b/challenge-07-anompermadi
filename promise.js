const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    const moodTheaterIXX = theaterIXX.filter((item) => item.hasil === emotion);
    const moodTheaterVGC = theaterVGC.filter((item) => item.hasil === emotion);

    return moodTheaterIXX.length + moodTheaterVGC.length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
