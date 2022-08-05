import xml2 from "xml2js";
import fs from "fs";

const test = async () => {
  try {
    fs.readFile("./example.xml", (err, data) => {
      const dataParsed = data.toString().replace("\ufeff", "");
      xml2.parseString(dataParsed, (err, result) => {
        console.log(result);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

test();
