const fs = require("fs");
const util = require("util");
const { exec: callbackExec } = require("child_process");
const exec = util.promisify(callbackExec);

const evalCoverage = async (func) => {
  await exec(
    `npm run test:coverage ${func} -- --coverageReporters="json-summary" --testFailureExitCode=0 --silent`
  );
  const coverage = JSON.parse(
    fs.readFileSync("./coverage/coverage-summary.json")
  );
  const key = Object.keys(coverage).find((key) => key.includes(func));
  return Number(coverage[key].statements.pct);
};

let handlerElephantsCoverage;
let getOpeningHoursCoverage;

beforeAll(async (done) => {
  handlerElephantsCoverage = await evalCoverage("handlerElephants");
  getOpeningHoursCoverage = await evalCoverage("getOpeningHours");
  done();
});

describe("6 - Obtenha ao menos 80% de cobertura de testes na função `handlerElephants`", () => {
  it("ao menos 80% de cobertura na função handlerElephants", () => {
    expect(handlerElephantsCoverage).toBeGreaterThanOrEqual(80);
  });
});

describe("7 - Obtenha ao menos 90% de cobertura de testes na função `handlerElephants`", () => {
  it("ao menos 90% de cobertura na função handlerElephants", () => {
    expect(handlerElephantsCoverage).toBeGreaterThanOrEqual(90);
  });
});

describe("12 - Obtenha ao menos 85% de cobertura de testes na função `getOpeningHours`", () => {
  it("ao menos 85% de cobertura na função getOpeningHours", () => {
    expect(getOpeningHoursCoverage).toBeGreaterThanOrEqual(85);
  });
});

describe("13 - Obtenha ao menos 95% de cobertura de testes na função `getOpeningHours`", () => {
  it("ao menos 95% de cobertura na função getOpeningHours", () => {
    expect(getOpeningHoursCoverage).toBeGreaterThanOrEqual(95);
  });
});

describe("15 - Obtenha 100% de cobertura de testes na função `handlerElephants`", () => {
  it("100% de cobertura na função handlerElephants", () => {
    expect(handlerElephantsCoverage).toBeGreaterThanOrEqual(100);
  });
});

describe("16 - Obtenha 100% de cobertura de testes na função `getOpeningHours`", () => {
  it("100% de cobertura na função getOpeningHours", () => {
    expect(getOpeningHoursCoverage).toBeGreaterThanOrEqual(100);
  });
});
