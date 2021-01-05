"use strict";

const BASE_URL = 'http://numbersapi.com';

// Part 1
// #1

async function simpleNumRequest(favNum) {
  const resp = await axios.get(
    `${BASE_URL}/${favNum}`,
    { params: {json: 'json'}}
  );

  return resp;
}

// #2

async function batchNumsRequest(nums) {
  const resp = await axios.get(
    `${BASE_URL}/${nums.join(',')}`,
    { params: {json: 'json'}}
  );

  return resp;
}

// #3

async function getFacts(favNum, iterations) {

  let promises = Array.from({length: iterations}).fill(simpleNumRequest(favNum));

  let resultsAnswers = await Promise.all(promises);

  displayFacts(resultsAnswers);

  // return resultsAnswers;
}

function displayFacts(results) {
  
  for (let r of results) {
    $('body').append(`<p>${r.data.text}</p>`);
  }

}

getFacts(3,4);

// let factsPromise = getFacts(3, 4);
// factsPromise.then(console.log);
                  
